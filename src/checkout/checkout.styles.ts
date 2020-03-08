import { dimensions, variables } from '../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Checkout } from './checkout.component';

export const ThemedCheckout = withStyles(Checkout, theme => ({
    container: {
        height: 60, //TODO give this a less extra height
        width: dimensions.fullWidth,
        backgroundColor: 'purple',
    },
    header: {
        backgroundColor: theme['color-primary-400'],
        height: 100,
        width: dimensions.fullWidth,
        padding: 30,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
    },
    content: {
        backgroundColor: theme['color-primary-400'],
        // height: '100%',
        //alignItems: 'center',
        height: 450,
        overflow: 'visible',
        width: dimensions.fullWidth,
        borderWidth: 0,
        padding: variables.sideMargin,
    },
    continueBtn: {
        width: dimensions.innerWidth,
    },
    total: {
        paddingHorizontal: 12,
        height: 48,
        borderRadius: variables.borderRadius2,
        backgroundColor: theme['color-basic-control-transparent-300'],
        marginRight: variables.sideMargin,
    },
}));
