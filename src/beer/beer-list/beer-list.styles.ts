import { variables } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { BeerList } from './beer-list.component';

export const ThemedBeerList = withStyles(BeerList, theme => ({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        padding: variables.sideMargin,
        paddingLeft: 0,
    },
    scrollView: {
        flex: 1,
        height: '100%',
        padding: variables.sideMargin,
    },
}));
