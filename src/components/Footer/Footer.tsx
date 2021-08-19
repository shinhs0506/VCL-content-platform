import React from 'react';
import {Container, Grid, Box, Link} from '@material-ui/core'
import ubcLogo from './UBC-logo.png'
import './Footer.css';

/*

TO DO:
* Extract text into statics instead of hard-coding
* Create dummy data structure to get project info from
* Fix styling
* Use react-router for links so they don't cause page re-render?

*/

const Footer = () => {
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
							<Box><Link href="/">Home</Link></Box>
							<Box><Link href="/timeline">Timeline</Link></Box>
							<Box><Link href="/projects">Projects</Link></Box>
							<Box><Link href="/about">About</Link></Box>
							<Box><Link href="/resources">Resources</Link></Box>
						</Grid>
						<Grid item xs={12} sm={2}>
							<Box>Projects</Box>
							<Box><Link href="/">Correlation</Link></Box>
							<Box><Link href="/">Nova</Link></Box>
							<Box><Link href="/">Shiva</Link></Box>
							<Box><Link href="/">IDEO</Link></Box>
							<Box><Link href="/">IT</Link></Box>
							<Box><Link href="/">Dormant</Link></Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	)
}

export default Footer;