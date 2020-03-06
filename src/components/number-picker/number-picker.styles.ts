import { dimensions, variables } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { NumberPicker } from './number-picker.component';

export const ThemedNumberPicker = withStyles(NumberPicker, theme => ({
    startBtn: {
        borderWidth: 0,
        height: 124,
    },
    button: {
        borderWidth: 0,
    },
    buttonDisabled: {
        backgroundColor: theme['color-primary-disabled'],
    },
    addBtn: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    subtractBtn: {
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        marginTop: -4,
    },
    input: {
        backgroundColor: theme['background-basic-color-1'],
        borderRadius: 0,
        margin: 0,
        borderColor: 'white',
    },
}));
