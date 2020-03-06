import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { BeerItem } from './beer-item.component';

const buttonWidth = 55;
const cardWidth = dimensions.innerWidth - buttonWidth - spacing(1);
const contentWidth = cardWidth - variables.cardMargin * 2;

export const ThemedBeerItem = withStyles(BeerItem, theme => ({
    container: {
        marginBottom: spacing(1),
    },
    card: {
        padding: variables.cardMargin,
        borderRadius: variables.borderRadius1,
        marginRight: spacing(1),
        width: cardWidth,
        height: '100%',
    },
    content: {
        width: contentWidth,
        padding: 0,
        marginRight: 0,
    },
    price: {
        paddingVertical: spacing(1),
        paddingHorizontal: spacing(1.5),
        borderRadius: variables.borderRadius1,
        backgroundColor: theme['color-primary-default'],
    },
    addContainer: {
        width: buttonWidth,
    },
}));
