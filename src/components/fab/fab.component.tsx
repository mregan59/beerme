import React from 'react'
import { View, Text } from 'react-native';

import { Button } from '@ui-kitten/components';



export const Fab = props => {
    const { themedStyle, ...rest } = props;
    return (
        <Button style={{ ...themedStyle.container, ...props.style }} {...rest} />
    )
}
