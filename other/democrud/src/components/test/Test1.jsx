//

import React from 'react';

const Test1 = () => (
	<main>
		<div className="row">
			<div className="col-3">
				<div className="box orange">3 columns</div>
			</div>
			<div className="col-3">
				<div className="box blue">3 columns</div>
			</div>
			<div className="col-3">
				<div className="box green">3 columns</div>
			</div>
			<div className="col-3">
				<div className="box black">3 columns</div>
			</div>
		</div>

		<div className="row">
			<div className="col-4">
				<div className="box orange">3 equal width columns</div>
			</div>
			<div className="col-4">
				<div className="box blue">3 equal width columns</div>
			</div>
			<div className="col-4">
				<div className="box green">3 equal width columns</div>
			</div>
		</div>

		<div className="row">
			<div className="col-6">
				<div className="box orange">2 equal width columns</div>
			</div>
			<div className="col-6">
				<div className="box blue">2 equal width columns</div>
			</div>
		</div>

		<div className="row">
			<div className="col-12">
				<div className="box orange">12-col column</div>
			</div>
		</div>
	</main>
);

export default Test1;
