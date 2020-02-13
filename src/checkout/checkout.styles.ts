import { dimensions, variables } from '../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Checkout } from './checkout.component';

export const ThemedCheckout = withStyles(Checkout, theme => ({
    container: {
        flex: 1,
        width: dimensions.fullWidth,
    },
    header: {
        backgroundColor: theme['color-primary-focus'],
        height: 100,
        width: dimensions.fullWidth,
        padding: 30,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
    },
    content: {
        backgroundColor: theme['color-primary-focus'],
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
        backgroundColor: theme['color-basic-control-transparent-200'],
        marginRight: variables.sideMargin,
    },
}));
