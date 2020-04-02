import React from 'react';
import { Button } from '@ui-kitten/components';

const BottomButton = props => {

    const { themedStyle } = props;

    return (
        <Button {...props}
            style={{ ...themedStyle.button, ...props.style }}
        >{props.children}</Button>
    );
};

export default BottomButton;

