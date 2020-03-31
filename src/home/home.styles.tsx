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
        paddingHorizontal: spacing(2),
        // height: 10,

    },
    order: {
        height: 120,
        padding: spacing(2),
        paddingRight: 0,
        marginRight: spacing(2),
        borderRadius: variables.borderRadius1,
        backgroundColor: theme['color-basic-300'],
    },
    innerOrder: {
        backgroundColor: theme['color-basic-500'],
        paddingVertical: spacing(1),
        paddingHorizontal: spacing(2),
        borderTopLeftRadius: variables.borderRadius1,
        borderBottomLeftRadius: variables.borderRadius1,
    },
    header: {
        paddingLeft: spacing(2)
    },
    button: {
        paddingBottom: 40,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        paddingTop: 20,
        borderRadius: '40rem',
    }
}));
