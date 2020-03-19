import { dimensions, variables, spacing } from '../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Checkout } from './checkout.component';

export const ThemedCheckout = withStyles(Checkout, theme => ({
    container: {
        height: 60, //TODO give this a less extra height
        width: dimensions.fullWidth,
    },
    header: {
        backgroundColor: theme['color-primary-500'],
        height: 100,
        width: dimensions.fullWidth,
        padding: variables.sideMargin,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
    },
    content: {
        backgroundColor: theme['color-primary-500'],
        // height: '100%',
        //alignItems: 'center',
        height: '100%',
        //minHeight: 350,
        //minHeight: 350,
        overflow: 'visible',
        width: dimensions.fullWidth,
        borderWidth: 0,
        padding: variables.sideMargin,
    },
    reviewBtn: {
        backgroundColor: theme['color-primary-400'],
    },
    beersContainer: {
        backgroundColor: theme['color-primary-400'],
        padding: spacing(2.5),
        paddingRight: spacing(0.5),
        width: '100%',
        borderRadius: variables.borderRadius2,
    },
    totalContainer: {
        backgroundColor: theme['color-primary-400'],
        padding: spacing(2.5),
        width: '100%',
        borderRadius: variables.borderRadius2,
        marginTop: spacing(2),
    },

    confirmBtn: {
        marginTop: 'auto',
        marginBottom: spacing(2),
        width: dimensions.innerWidth,
        backgroundColor: theme['color-primary-600'],
    },
    total: {
        paddingHorizontal: 12,
        height: 48,
        borderRadius: variables.borderRadius2,
        backgroundColor: theme['color-basic-control-transparent-300'],
        marginRight: variables.sideMargin,
    },
}));
