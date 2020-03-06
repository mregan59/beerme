import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from '@ui-kitten/components';

export const NumberPicker = props => {
    const [num, setNum] = useState(props.value || 0);
    const [stringNum, setStringNum] = useState(
        (props.value && props.value.toString()) || '0'
    );

    const { themedStyle } = props;

    const { max } = props;

    const min = 0; // can add this in  as a prop maybe sometime

    useEffect(() => {
        if (num <= min) {
            setStringNum('1');
        } else {
            setStringNum(num.toString());
        }
        props.onChange && props.onChange(num);
    }, [num]);

    const add = () => {
        if (!max || num < max) {
            setNum(num + 1);
        }
    };

    const subtract = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };

    //TODO maybe instead of input do custom input
    const setInput = value => {
        let stringValue = value.toString();
        if (value < min) {
            stringValue = min.toString();
        } else if (value > max) {
            stringValue = max.toString();
        }
        setStringNum(stringValue);
    };

    const addDisabled = num >= max;
    const subtractDisabled = num == 0;
    return (
        <View style={props.style}>
            {num == 0 ? (
                <Button
                    status="basic"
                    style={[themedStyle.startBtn]}
                    onPress={add}
                >
                    +
                </Button>
            ) : (
                <React.Fragment>
                    <Button
                        status="primary"
                        style={[
                            themedStyle.button,
                            themedStyle.addBtn,
                            addDisabled && themedStyle.buttonDisabled,
                        ]}
                        disabled={addDisabled}
                        onPress={add}
                    >
                        +
                    </Button>
                    <Input
                        textAlign={'center'}
                        style={themedStyle.input}
                        selectTextOnFocus
                        keyboardType="numeric"
                        value={stringNum}
                        onChangeText={setInput}
                    />
                    <Button
                        status="primary"
                        style={[
                            themedStyle.button,
                            themedStyle.subtractBtn,
                            subtractDisabled && themedStyle.buttonDisabled,
                        ]}
                        disabled={subtractDisabled}
                        onPress={subtract}
                    >
                        -
                    </Button>
                </React.Fragment>
            )}
        </View>
    );
};
