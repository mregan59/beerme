import { dimensions, variables, spacing } from '../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Home } from './home.component';

export const ThemedHome = withStyles(Home, theme => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    order: {
        borderWidth: 1,
        borderColor: 'hotpink',
        padding: 20,
        margin: 8,
    }
}));
