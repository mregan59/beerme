import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Badge } from './badge.component';

export const ThemedBadge = withStyles(Badge, theme => ({
    container: {
        borderRadius: variables.borderRadius1,
        paddingHorizontal: spacing(0.75),
        paddingVertical: spacing(0.25),
    },
    outlined: {
        borderWidth: 1,
        borderColor: theme['color-basic-400'],
    },
    primary: {
        backgroundColor: theme['color-primary-500'],
    },
    info: {
        backgroundColor: theme['color-info-600'],
    },
    success: {
        backgroundColor: theme['color-success-600'],
    },
    basic: {
        backgroundColor: theme['color-basic-600'],
    },
}));
