import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Fab } from './fab.component';

export const ThemedFab = withStyles(Fab, theme => ({
    container: {
        borderRadius: 50,
        padding: 20,
        height: 56,
        width: 56,
        maxWidth: 56,
        maxHeight: 56,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 5,
    },
}));
