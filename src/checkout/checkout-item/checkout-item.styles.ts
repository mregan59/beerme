import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { CheckoutItem } from './checkout-item.component';

const buttonWidth = 55;
const cardWidth =
    dimensions.fullWidth - variables.sideMargin - buttonWidth - spacing(1);
const contentWidth = cardWidth - variables.cardMargin * 2;

export const ThemedCheckoutItem = withStyles(CheckoutItem, theme => ({
    item: {
        width: '100%',
        marginVertical: spacing(0.5),
    },
    button: {
        textColor: theme['text-alternate-color'],
        opacity: 0.6,
        padding: 0,
        marginLeft: spacing(0.5),
    },
    price: {
        paddingVertical: spacing(0.5),
        paddingHorizontal: spacing(1),
        backgroundColor: theme['color-primary-600'],
        borderRadius: variables.borderRadius1,
        marginLeft: 'auto',
    },
}));
