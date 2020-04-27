
import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => (
	<div className="ui container grid">
		<div className="ui row">
			<div className="eight wide column">
				<SongList />
			</div>
			<div className="eight wide column">
				<SongDetail />
			</div>
		</div>
	</div>
);

export default App;
