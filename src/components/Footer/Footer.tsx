import React from 'react';
import { TEXT } from '@statics';
import './Footer.css'

const Footer = () => {
    return (
        <div className={'footer'}>
            <ul>Tel {TEXT.LAB_INFO.TEL}</ul>
            <ul>Fax {TEXT.LAB_INFO.FAX}</ul>
            <ul>Lab {TEXT.LAB_INFO.EMAIL}</ul>
            <ul>Dr. Rensink {TEXT.LAB_INFO.DRRENSINK_CONTACT}</ul>
            <ul>{TEXT.COMMON.TITLE} {TEXT.LAB_INFO.TEL}</ul>
        </div>
           )       
}

export default Footer;
