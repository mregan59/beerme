import { dimensions, variables } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { NumberPicker } from './number-picker.component';

export const ThemedNumberPicker = withStyles(NumberPicker, theme => ({
    startBtn: {
        borderWidth: 0,
        height: '100%',
        backgroundColor: theme['color-basic-500'],
    },
    button: {
        borderWidth: 0,
        backgroundColor: theme['color-primary-400'],
    },
    buttonDisabled: {
        backgroundColor: theme['color-primary-disabled'],
    },
    addBtn: {
        borderTopRightRadius: variables.borderRadius2,
        borderTopLeftRadius: variables.borderRadius2,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    subtractBtn: {
        borderBottomRightRadius: variables.borderRadius2,
        borderBottomLeftRadius: variables.borderRadius2,
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
