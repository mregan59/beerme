import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import BottomButton from './bottom-button.component';

export const ThemedBottomButton = withStyles(BottomButton, theme => ({
    button: {
        paddingBottom: 40, //TOOD only on ios
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        paddingTop: 20,
        borderRadius: 0,
    },
}));
