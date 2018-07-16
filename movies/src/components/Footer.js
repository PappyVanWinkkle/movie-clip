/* ===================
  FOOTER COMPONENT 
======================== */

import React from 'react';

const Footer = () => {
	return (
		<section style={{ background: '#000000' }}>
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<h3
							className="  p-3"
							style={{
								color: '#FF0000',
								fontWeight: '800',
								textTransform: 'uppercase',
								fontFamily: "'Audiowide', cursive"
							}}
						>
							Movie-Clip
						</h3>
						<p className="text-light py-4 m-0">&copy; Copyright 2018 - Made by Paul Chabz</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
