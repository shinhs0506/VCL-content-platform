import React from 'react';
import { Container, Grid, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import ubcLogo from './UBC-logo.png'
import './Footer.css';
import { NAVIGATION } from '@statics';

/*

TO DO:
* Extract text into statics instead of hard-coding
* Create dummy data structure to get project info from
* Fix styling

*/

const Footer = () => {
	const renderedNavigation = NAVIGATION.map(({ TITLE, REF }) => {
		return (
			<React.Fragment key={REF}>
				<Box><Link to={REF}>{TITLE}</Link></Box>
			</React.Fragment>
		);
	});

	return (
		<div>
			<Box className="footer-root">
				<Container>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={8}>
							<Box><img id="footer-logo" src={ubcLogo} alt="UBC logo"/></Box>
							<Box>Tel:</Box>
							<Box>Fax:</Box>
							<Box>Lab:</Box>
							<Box>Dr. Rensink:</Box>
						</Grid>
						<Grid item xs={12} sm={2}>
							<Box>Navigate</Box>
							{renderedNavigation}
						</Grid>
						<Grid item xs={12} sm={2}>
							<Box>Projects</Box>
							<Box><Link to="/">Correlation</Link></Box>
							<Box><Link to="/">Nova</Link></Box>
							<Box><Link to="/">Shiva</Link></Box>
							<Box><Link to="/">IDEO</Link></Box>
							<Box><Link to="/">IT</Link></Box>
							<Box><Link to="/">Dormant</Link></Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	)
}

export default Footer;