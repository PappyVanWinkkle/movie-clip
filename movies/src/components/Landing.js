/* =====================
   Landing Component 
======================== */

import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Landing = () => {
	return (
		<div>
			<Nav />
			<section>
				<div className="container-fluid">
					<div className="row bg-info justify-content-center align-items-center" style={{ height: '100vh' }}>
						<div className="col-sm-10 text-center">
							<h1 className="dispay-2 text-capitalize">
								<span
									style={{
										ontWeight: '800',
										textTransform: 'uppercase',
										fontFamily: "'Audiowide', cursive"
									}}
								>
									Movie-Clip
								</span>{' '}
							</h1>
							<Link to="/shows" style={{ textDecoration: 'none' }}>
								<button className="btn btn-warning px-4 mt-4">Discover More</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Landing;
