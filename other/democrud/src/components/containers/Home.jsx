//

import React from 'react';
import PropTypes from 'prop-types';

import { ListWidgets, SelectWidget, CreateWidget, EditWidget, DeleteWidget } from '../widgets';

import Layout from './Layout';

import { matchType } from '../../types';

const Home = props => {
	const { datatype } = props;
	let mainDiv = '';
	let main = false;
	switch (datatype) {
		case 'select':
			mainDiv = <SelectWidget {...props} />;
			break;
		case 'create':
			mainDiv = <CreateWidget />;
			break;
		case 'edit':
			mainDiv = <EditWidget {...props} />;
			break;
		case 'delete':
			mainDiv = <DeleteWidget {...props} />;
			break;
		case 'all':
		default:
			mainDiv = <ListWidgets />;
			main = true;
			break;
	}
	return <Layout main={main}>{mainDiv}</Layout>;
};

Home.propTypes = {
	datatype: PropTypes.string.isRequired,
	match: matchType.isRequired
};

export default Home;
