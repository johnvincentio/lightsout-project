// PlayerBreadCrumbs

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import styled from 'styled-components';

import { isBreadCrumbsReady } from '../utilities/utils';

const BreadCrumbsContainer = styled.div`
	width: 100%;
	// margin: 0 auto;		// to center the bread crumbs
`;

const styles = theme => ({
	root: {
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	paper: {
		padding: theme.spacing(2)
	}
});

class PlayerBreadCrumbs extends React.Component {
	selectFolder = (e, folderId) => {
		e.preventDefault();
		// console.log('PlayerBreadCrumbs::selectFolder; folderId ', folderId);
		this.props.selectFolder(folderId);
	};

	createBreadCrumbList(folders, folderId) {
		const list = [];
		let current = folders[folderId];
		list.push(current);
		while (current.previous !== null) {
			current = folders[current.previous];
			list.push(current);
		}
		const arr = list.reverse();
		return arr.map(item => (
			<div key={item.index}>
				{item.index === 0 ? (
					<Link
						color="textPrimary"
						href="/"
						onClick={event => this.selectFolder(event, item.index)}
					>
						{'Home'}
					</Link>
				) : (
					<Link
						color="textPrimary"
						href="/"
						onClick={event => this.selectFolder(event, item.index)}
					>
						{item.name}
					</Link>
				)}
			</div>
		));
	}

	render() {
		const { classes, folders, folderId } = this.props;
		if (!isBreadCrumbsReady(folders, folderId)) {
			return '';
		}
		return (
			<BreadCrumbsContainer>
				<div className={classes.root}>
					<Paper elevation={0} className={classes.paper}>
						<Breadcrumbs separator="›" aria-label="Breadcrumb">
							{this.createBreadCrumbList(folders, folderId)}
						</Breadcrumbs>
					</Paper>
				</div>
			</BreadCrumbsContainer>
		);
	}
}

PlayerBreadCrumbs.propTypes = {
	classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	folders: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
	folderId: PropTypes.number,
	selectFolder: PropTypes.func.isRequired
};

PlayerBreadCrumbs.defaultProps = {
	folderId: null
};

export default withStyles(styles)(PlayerBreadCrumbs);
