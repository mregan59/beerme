import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { BeerItem } from './beer-item.component';

const buttonWidth = 0;
const cardWidth = dimensions.fullWidth - variables.sideMargin * 2; // - buttonWidth - spacing(1);
const contentWidth = cardWidth - variables.cardMargin * 2;

export const ThemedBeerItem = withStyles(BeerItem, theme => ({
    container: {
        marginBottom: spacing(2.5),
        marginHorizontal: variables.sideMargin,
        // height: 108,
    },
    card: {
        padding: variables.cardMargin,
        borderRadius: variables.borderRadius2,
        // borderTopLeftRadius: 0,
        // borderBottomLeftRadius: 0,
        marginRight: spacing(1),
        paddingLeft: variables.sideMargin,
        width: cardWidth,
        height: '100%',
    },
    content: {
        width: contentWidth,
        padding: 0,
        marginRight: 0,
    },
    price: {
        paddingVertical: spacing(0.5),
        paddingHorizontal: spacing(1),
        //borderRadius: variables.borderRadius1,
        borderTopRightRadius: variables.borderRadius2,
        borderBottomLeftRadius: variables.borderRadius1,
        position: 'absolute',
        backgroundColor: theme['color-info-600'],
        right: 0,
        top: 0,
    },
    addContainer: {
        width: buttonWidth,
    },
    addBtn: {
        backgroundColor: theme['color-basic-500'],
        borderBottomRightRadius: variables.borderRadius2,
        borderTopLeftRadius: variables.borderRadius1,
        height: 50,
        width: 50,
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
}));
