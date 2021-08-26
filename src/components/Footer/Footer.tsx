import React from 'react';
import { Container, Grid, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import ubcLogo from './UBC-logo.png'
import './Footer.css';
import { NAVIGATION, CONTACT } from '@statics';

/*

TO DO:
* Create dummy data structure to get project info from
* Fix styling

*/

const Footer = () => {
	const renderedContacts = Object.entries(CONTACT).map(entry => {
		const {LABEL, VALUE, TYPE} = entry[1];

		const renderedValue = TYPE === "email" ? 
			<a href={`mailto:${VALUE}`}>{VALUE}</a>
      : VALUE;

		return (
			<React.Fragment key={LABEL}>
				<Box><b>{LABEL}:</b> {renderedValue}</Box>
			</React.Fragment>
		);
	});

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
							{renderedContacts}
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