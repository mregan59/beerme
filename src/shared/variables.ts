import { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export const variables = {
    sideMargin: 16,
    cardMargin: 16,
    borderRadius1: 5,
    borderRadius2: 10,
};

export const dimensions = {
    innerWidth: width - variables.sideMargin * 2,
    fullWidth: width,
};

export const spacing = num => {
    return num * 8;
};
