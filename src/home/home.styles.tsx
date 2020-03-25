import { dimensions, variables, spacing } from '../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Home } from './home.component';

export const ThemedHome = withStyles(Home, theme => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    slider: {

    },
    order: {
        height: 120,
        padding: spacing(2),
        margin: spacing(1),
    }
}));
