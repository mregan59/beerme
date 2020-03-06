import React, { useState } from 'react';
import { MainLayout } from '../../layout';
import {
    Input,
    Datepicker,
    Layout,
    Text,
    Button,
    Icon,
} from '@ui-kitten/components';
import { Image } from 'react-native';
import firebase from 'firebase';
import '@firebase/firestore';

export const BeerEdit = props => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [date, setDate] = useState(new Date());
    const beersRef = firebase.firestore().collection('beers');
    // const [expireDate, setExpireDate] = useState(
    //     moment()
    //         .add(14, 'days')
    //         .toDate()
    // );
    const createBeer = () => {
        beersRef.add({
            name: name,
            description: desc,
            price: price,
            quantity: quantity,
        });
    };
    return (
        <MainLayout {...props} showBack padding level="2">
            <Input placeholder="Name" value={name} onChangeText={setName} />
            <Input
                placeholder="Description"
                value={desc}
                onChangeText={setDesc}
            />
            <Input
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <Input
                placeholder="Quantity"
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
            />
            <Datepicker
                placeholder="Pick a start date"
                icon={style => (
                    <Image
                        style={style}
                        source={{
                            uri:
                                'https://akveo.github.io/eva-icons/fill/png/128/google.png',
                        }}
                    ></Image>
                )}
                date={date}
                onSelect={setDate}
            />
            {/* <Datepicker date={expireDate} onSelect={setExpireDate} /> */}
            <Button onPress={createBeer}>Create Beer</Button>
        </MainLayout>
    );
};
