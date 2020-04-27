//

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { List, ListItem, ListItemText } from '@material-ui/core';

import FolderIcon from '@material-ui/icons/Folder';
import { AllStyles, FoldersContainer } from './AllStyles';

import { isShowFoldersReady } from '../utilities/utils';

class ShowFolders extends React.Component {
	selectFolder = (e, folderId) => {
		e.preventDefault();
		// console.log('ShowFolders::selectFolder; folderId ', folderId);
		this.props.selectFolder(folderId);
	};

	renderSubFolders(folderId) {
		const { classes } = this.props;
		const current = this.props.folders[folderId];
		return current.next.map(item => {
			const subFolder = this.props.folders[item];
			const dir = subFolder.dir.replace(`${current.dir}/`, '');
			return (
				<div key={subFolder.index}>
					<ListItem
						className={classes.item}
						button
						onClick={event => this.selectFolder(event, subFolder.index)}
					>
						<FolderIcon className={classes.playIcon} />
						<ListItemText className={classes.itemText} inset primary={dir} />
					</ListItem>
				</div>
			);
		});
	}

	render() {
		const { folders, folderId } = this.props;

		if (!isShowFoldersReady(folders, folderId)) {
			return '';
		}
		return (
			<FoldersContainer>
				<List>{this.renderSubFolders(folderId)}</List>
			</FoldersContainer>
		);
	}
}

ShowFolders.propTypes = {
	classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	folders: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
	folderId: PropTypes.number,
	selectFolder: PropTypes.func.isRequired
};

ShowFolders.defaultProps = {
	folderId: null
};

export default withStyles(AllStyles, {
	name: 'ShowFolders',
	withTheme: true
})(ShowFolders);
