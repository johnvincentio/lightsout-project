//

import { appTheme } from '../../themes/themes';

const { topNavLineHeight } = appTheme;

const HomeLayoutStyles = theme => ({
	flex: {
		flex: 1
	},
	root: {
		flexGrow: 1,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%'
	},
	title: {
		flex: 1,
		display: 'inline-flex',
		verticalAlign: 'middle',
		lineHeight: `${topNavLineHeight}px`,

		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center'
		},
		textDecoration: 'none'
	},
	appBar: {
		display: 'flex',
		minHeight: `calc(2 * ${topNavLineHeight}px)`,
		justifyContent: 'space-between',
		backgroundColor: theme.palette.primary.dark
	},

	drawerIcon: {
		height: '24px',
		width: '24px',
		marginRight: '16px',
		fill: theme.palette.primary.main
	}
});

export default HomeLayoutStyles;
