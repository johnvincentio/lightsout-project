//

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { List, ListItem, ListItemText } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import MenuIcon from '@material-ui/icons/Menu';

import LogoIcon from '../tools/LogoIcon';

import LayoutStyles from './LayoutStyles';

class Layout extends React.Component {
	state = {
		mobileOpen: false
	};

	handleDrawerToggle = () => {
		this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));
	};

	render() {
		// console.log('Layout; props ', this.props);
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<Typography
								variant="h6"
								color="inherit"
								component={Link}
								to="/"
								className={classes.title}
								noWrap
							>
								<LogoIcon />
								MyTunes
							</Typography>

							{/* <Hidden xsDown>
								<Button color="inherit" component={Link} to="/folders">
									Folders
								</Button>

								<Button color="inherit" component={Link} to="/albums">
									Albums
								</Button>

								<Button color="inherit" component={Link} to="/artists">
									Artists
								</Button>

								<Button color="inherit" component={Link} to="/favorites">
									Favorites
								</Button>
							</Hidden> */}

							{/* <Hidden smUp>
								<div className={classes.right}>
									<IconButton
										color="inherit"
										aria-label="open drawer"
										onClick={this.handleDrawerToggle}
										className={classes.navIconHide}
									>
										<MenuIcon />
									</IconButton>
								</div>
							</Hidden> */}
						</Toolbar>
					</AppBar>

					{/* <Hidden mdUp>
						<Drawer
							variant="temporary"
							anchor="left"
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
							ModalProps={{
								keepMounted: true
							}}
						>
							<List>
								<ListItem button component={Link} to="/folders">
									<ListItemText inset primary="Folders" />
								</ListItem>
								<ListItem button component={Link} to="/albums">
									<ListItemText inset primary="Albums" />
								</ListItem>
								<ListItem button component={Link} to="/artists">
									<ListItemText inset primary="Artists" />
								</ListItem>
								<ListItem button component={Link} to="/favorites">
									<ListItemText inset primary="Favorites" />
								</ListItem>
							</List>
						</Drawer>
					</Hidden> */}

					{this.props.children}
				</div>
			</div>
		);
	}
}

Layout.propTypes = {
	classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default withStyles(LayoutStyles, { withTheme: true })(Layout);
