import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { DeliveryDate } from './delivery-date.component';

export const ThemedDeliveryDate = withStyles(DeliveryDate, theme => ({
    dateContainer: {
        backgroundColor: theme['color-basic-100'],
        borderRadius: variables.borderRadius3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: spacing(4),
        paddingBottom: spacing(6),
    },
}));
