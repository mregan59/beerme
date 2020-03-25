import { dimensions, variables, spacing } from '../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Order } from './order.component';

export const ThemedOrder = withStyles(Order, theme => ({
    dateContainer: {
        backgroundColor: theme['color-basic-100'],
        borderRadius: variables.borderRadius3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: spacing(4),
        paddingBottom: spacing(6),
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
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

    dateText: {
        marginLeft: spacing(2),
    },
}));
