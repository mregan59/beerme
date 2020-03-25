import { variables, dimensions, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { BeerDetails } from './beer-details.component';

const badgeWidth = (dimensions.fullWidth - 16) / 4;

export const ThemedBeerDetails = withStyles(BeerDetails, theme => ({
    container: {
        marginHorizontal: variables.sideMargin,
        marginBottom: spacing(2)
    },
    badgeContainer: {
        background: 'hotpink',
        width: badgeWidth,
        height: badgeWidth,
        padding: spacing(1)

    },
    badge: {
        backgroundColor: theme['color-primary-300'],
        borderRadius: variables.borderRadius1,
    }
}));