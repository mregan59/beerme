import React, { useState, useEffect, useRef } from 'react';
import { MainLayout } from '../../layout';
import {
    Input,
    Datepicker,
    Button,
    Icon,
    Select,
} from '@ui-kitten/components';
import moment from 'moment';
import { useInput, useSelect } from '../../util/hooks';
import { Spacer } from '../../components/spacer'
import { SettingsIcon } from '../../assets/icons';

export const BeerEdit = props => {
    const { beer = null } = props.route.params;


    const initialStyle = props.styles.find(s => beer && s.id == beer.style);


    const { value: name, bind: bindName } = useInput(beer ? beer.name : '');
    const { value: desc, bind: bindDesc } = useInput(beer ? beer.description : '');
    const { value: price, bind: bindPrice } = useInput(beer ? beer.price.toString() : '');
    const { value: ibu, bind: bindIbu } = useInput(beer ? beer.ibu.toString() : '');
    const { value: abv, bind: bindAbv } = useInput(beer ? beer.abv.toString() : '');
    const { value: quantity, bind: bindQuantity } = useInput(beer ? beer.quantity.toString() : '');
    const { value: style, bind: bindStyle } = useSelect(initialStyle ? { text: initialStyle.style, id: initialStyle.id } : '');

    const availableDateRef = useRef(null);
    const expireDateRef = useRef(null);
    const [availableDate, setAvailableDate] = useState(moment().toDate());
    const [expireDate, setExpireDate] = useState(
        moment()
            .add(14, 'days').toDate()
    );

    useEffect(() => {
        if (props.styles.length == 0) {
            props.getBeerStyles();
        }

    }, [])

    const createBeer = () => {
        //validate first

        props.addBeer({
            name: name,
            description: desc,
            price: price,
            quantity: quantity,
            availableDate: availableDate,
            style: style.id,
            expireDate: expireDate,
            ibu: ibu,
            abv: abv
        })
    };

    const onAvailableDateSelect = date => {
        setAvailableDate(date);
        availableDateRef.current.blur();

    }

    const onExpireDateSelect = date => {
        setExpireDate(date);
        expireDateRef.current.blur();

    }

    const mappedStyles = props.styles.map(style => { return { text: style.style, id: style.id } })


    return (
        <MainLayout {...props} showBack padding level="2">
            <Input placeholder="Name" {...bindName} />
            <Input
                placeholder="Description"
                {...bindDesc}
            />
            <Select
                data={mappedStyles}
                {...bindStyle}
            />
            <Spacer height={.5}></Spacer>
            <Input
                placeholder="Price"
                {...bindPrice}
                keyboardType="numeric"
            />
            <Input
                placeholder="Quantity"
                {...bindQuantity}
                keyboardType="numeric"
            />
            <Input
                placeholder="IBU"
                {...bindIbu}
                keyboardType="numeric"
            />
            <Input
                placeholder="ABV"
                {...bindAbv}
                keyboardType="numeric"
            />
            <Datepicker
                icon={SettingsIcon}
                ref={availableDateRef}
                date={availableDate}
                onSelect={onAvailableDateSelect}
            />
            <Datepicker icon={SettingsIcon} ref={expireDateRef} date={expireDate} onSelect={onExpireDateSelect} />
            <Button onPress={createBeer}>Create Beer</Button>
        </MainLayout>
    );
};
