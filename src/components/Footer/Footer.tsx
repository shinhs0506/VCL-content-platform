import React from 'react';
import { TEXT, NAVBAR } from '@statics';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {

    const renderedLinks = NAVBAR.map(({ TITLE, REF }) => {
            return (
            <React.Fragment key={REF}>
            <Link to={REF}>{TITLE} </Link>
            </React.Fragment>
                   )
            })

    return (
            <>
                <div className="left">
                    <ul>Tel {TEXT.LAB_INFO.TEL}</ul>
                    <ul>Fax {TEXT.LAB_INFO.FAX}</ul>
                    <ul>Lab {TEXT.LAB_INFO.EMAIL}</ul>
                    <ul>Dr. Rensink {TEXT.LAB_INFO.DRRENSINK_CONTACT}</ul>
                    <ul>{TEXT.COMMON.TITLE} {TEXT.LAB_INFO.TEL}</ul>
                </div>

                <div className="right">
               {renderedLinks}
                </div>
            </>

           )       
}
        

export default Footer;
