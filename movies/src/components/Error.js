/*
 ====================
   404 PAGE FOR THE APP
 *=================== */

import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Errors = () => {
	return (
		<div>
			<Nav />
			<div className="container-fluid" style={{ background: '#1E2E3F' }}>
				<div className="row">
					<div className="col-sm-12">
						<div className="jumbotron jumbotron-fluid" style={{ height: '100vh' }}>
							<div className="container">
								<h1
									className="display-1 text-center"
									style={{ marginTop: '10rem', fontFamily: "'Audiowide', cursive" }}
								>
									404 Page Not Found
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Errors;
