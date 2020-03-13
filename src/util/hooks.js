import { useState } from 'react';

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChangeText: value => {
                setValue(value);
            },
        },
    };
};

export const useSelect = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            selectedOption: value,
            onSelect: value => {
                setValue(value);
            },
        },
    };
};

export const useDatePicker = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            date: value,
            onSelect: value => {
                setValue(value);
            },
        },
    };
};
