import { dimensions, variables } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { BeerItem } from './beer-item.component';

const innerCardWidth = dimensions.innerWidth - variables.cardMargin * 2;
const buttonWidth = 45;
const quantityMargin = 4;
const quantityWidth = (innerCardWidth + 4 * 2) / 8 - 4 * 2;

export const ThemedBeerItem = withStyles(BeerItem, theme => ({
    container: {
        padding: variables.cardMargin,
        marginVertical: 5,
        borderRadius: 5,
    },
    content: {
        width: dimensions.innerWidth - variables.cardMargin * 2 - buttonWidth,
        padding: 0,
        marginRight: 0,
    },
    price: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: theme['color-primary-default'],
    },
    addBtnContainer: {
        width: 45,
    },
    quantity: {
        backgroundColor: theme['color-basic-400'],
        width: quantityWidth,
        height: quantityWidth,
        marginHorizontal: quantityMargin,
        borderRadius: 5,
    },

    quantitySelected: {
        backgroundColor: theme['color-primary-default'],
    },
    quantityContainer: {
        marginHorizontal: -quantityMargin,
        marginTop: 16,
    },
}));
