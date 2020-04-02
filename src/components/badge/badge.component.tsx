import React from 'react'
import { View } from 'react-native'
import { FlexBox } from '../flexbox';
import { Text } from '@ui-kitten/components';

export const Badge = props => {

    const { color, children, themedStyle } = props;
    return (
        <FlexBox style={[themedStyle.container, color ? themedStyle[color] : themedStyle.outlined]}>
            <Text category="c1" appearance={color ? "alternative" : "default"}>{children}</Text>
        </FlexBox>
    )
}

