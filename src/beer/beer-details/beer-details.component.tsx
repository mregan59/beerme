import React from 'react';
import { MainLayout } from '../../layout';
import { Text, Button } from '@ui-kitten/components';
import { FlexBox } from '../../components';

const BeerInfo = ({ content, style }) => {
    return (
        <FlexBox style={style.badgeContainer}>
            <FlexBox justifycenter aligncenter flex1 style={style.badge}>
                <Text category="h6" appearance="alternative">{content.info}</Text>
                <Text category="c2" appearance="alternative">{content.descriptor}</Text>
            </FlexBox>
        </FlexBox>
    )
}

export const BeerDetails = props => {
    const { beer } = props.route.params;
    const { themedStyle } = props;

    return (
        <MainLayout padding={null} level="0" {...props} showBack showTitle={false} title={beer.name}>
            <FlexBox style={themedStyle.container}>
                <Text category="h2">{beer.name}</Text>
                <Text category="h6">{beer.style_name}</Text>

            </FlexBox>

            <FlexBox row justifycenter>
                <BeerInfo style={themedStyle} content={{ info: beer.quantity, descriptor: 'kegs' }}></BeerInfo>
                <BeerInfo style={themedStyle} content={{ info: `$${beer.price}`, descriptor: 'per keg' }}></BeerInfo>
                <BeerInfo style={themedStyle} content={{ info: beer.ibu, descriptor: 'IBU' }}></BeerInfo>
                <BeerInfo style={themedStyle} content={{ info: beer.abv, descriptor: 'ABV' }}></BeerInfo>
            </FlexBox>
            <FlexBox style={themedStyle.container}>
                <Text category="label" >Description</Text>
                <Text appearance="hint" category="p1" >{beer.description}</Text>
                <Button>Add to Cart</Button>
            </FlexBox>


        </MainLayout>
    );
};

