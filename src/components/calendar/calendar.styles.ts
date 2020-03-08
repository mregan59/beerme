import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import Calendar from './calendar.component';

export const ThemedCalendar = withStyles(Calendar, theme => ({
    scrollView: {},
    date: {
        paddingVertical: spacing(1.25),
        borderRadius: variables.borderRadius1,
        width: 60,
    },
    selectedDate: {
        backgroundColor: theme['color-primary-400'],
    },
    dateSpacing: {
        marginHorizontal: spacing(0.5),
    },
}));
