import { variables } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Dashboard } from './dashboard.component';

export const ThemedDashboard = withStyles(Dashboard, theme => ({
    scrollView: {
        flex: 1,
        height: '100%',
        paddingVertical: variables.sideMargin,
    },
}));
