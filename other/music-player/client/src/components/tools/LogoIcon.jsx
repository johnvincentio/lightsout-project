//

import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { appTheme } from '../../themes/themes';

import Icon from './Icon';

const { topNavLineHeight } = appTheme;

const LogoIconStyles = theme => ({
	logo: {
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center'
		},
		fill: theme.palette.common.white,
		height: `${topNavLineHeight}px`,
		width: `${topNavLineHeight}px`,
		margin: '0 0.5em'
	}
});

function LogoIcon(props) {
	return <Icon name="player" css={props.classes.logo} />;
}

LogoIcon.propTypes = {
	classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(LogoIconStyles, { withTheme: true })(LogoIcon);
