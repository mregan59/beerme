import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { BeerItem } from './beer-item.component';

const buttonWidth = 55;
const cardWidth =
    dimensions.fullWidth - variables.sideMargin - buttonWidth - spacing(1);
const contentWidth = cardWidth - variables.cardMargin * 2;

export const ThemedBeerItem = withStyles(BeerItem, theme => ({
    container: {
        marginBottom: spacing(2.5),
        height: 108,
    },
    card: {
        padding: variables.cardMargin,
        borderRadius: variables.borderRadius2,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginRight: spacing(1),
        paddingLeft: variables.sideMargin,
        width: cardWidth,
        height: '100%',
    },
    content: {
        width: contentWidth,
        padding: 0,
        marginRight: 0,
    },
    price: {
        paddingVertical: spacing(0.5),
        paddingHorizontal: spacing(1),
        borderRadius: variables.borderRadius1,
    },
    addContainer: {
        width: buttonWidth,
    },
}));
