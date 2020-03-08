import React, { useEffect, useState, useRef } from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { FlexBox } from '../flexbox';
import moment from 'moment';
import { Layout, Text } from '@ui-kitten/components';
import { dimensions } from '../../shared/variables';

const Calendar = props => {

    const { themedStyle, currentDate = moment(),
        showDaysBeforeCurrent = 7,
        showDaysAfterCurrent = 14, } = props;
    const getDates = (): Array<moment.Moment> => {


        // Go `showDaysBeforeCurrent` ago before today or custom `currentDate`
        const startDay = moment(currentDate || undefined).subtract(
            showDaysBeforeCurrent + 1,
            'days'
        );
        // Number of days in total
        const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent + 1;

        // And return an array of `totalDaysCount` dates
        return [...Array(totalDaysCount)].map(_ =>
            startDay.add(1, 'day').clone()
        );
    };
    const [dates, setDates] = useState(getDates());
    //const [selectedDate, setSelectedDate] = useState(currentDate);
    const [selectedIndex, setSelectedIndex] = useState(showDaysBeforeCurrent);
    const scroller = useRef(null);

    useEffect(() => {
        console.log(selectedIndex)
        if (scroller) {
            //find index
            scroller.current.scrollTo({ x: (selectedIndex * 68) - (dimensions.fullWidth / 2) + 30, y: 0, animated: true })
        }

    }, [selectedIndex])

    // Get an array of dates for showing in a horizontal scroll view



    const onSelect = (date, i) => {
        setSelectedIndex(i);
        props.onSelect && props.onSelect(date);
    }

    const renderedDates = dates.map((date, i) => {
        const isSelected = i == selectedIndex;
        return (
            <View style={themedStyle.dateSpacing} key={date.toString()}>
                <TouchableWithoutFeedback onPress={() => onSelect(date, i)} >
                    <Layout level="3" style={[themedStyle.date, isSelected && themedStyle.selectedDate]} >
                        <FlexBox justifycenter aligncenter>
                            <Text appearance={isSelected ? "alternative" : "hint"} category='s2'>{date.format('ddd')}</Text>
                            <Text appearance={isSelected ? "alternative" : "hint"} category='h6'>{date.format('DD')}</Text>
                        </FlexBox>
                    </Layout>
                </TouchableWithoutFeedback>
            </View>
        );
    });

    return (
        <ScrollView ref={scroller} showsHorizontalScrollIndicator={false} horizontal>
            <FlexBox row>
                {renderedDates}
            </FlexBox>
        </ScrollView>
    );
};

export default Calendar;

