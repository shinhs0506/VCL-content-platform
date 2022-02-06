import React from 'react';
import { TEXT, NAVBAR } from '@statics';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import './Footer.css'
const Footer = () => {

    const renderedNavLinks = NAVBAR.map(({ TITLE, REF }) => {
            return (
            <React.Fragment key={REF}>
            <Link to={REF}>{TITLE} </Link>
            </React.Fragment>
                   )
            })

    const projects = useAppSelector(selectProjects);
    const renderedProjectLinks = projects.map((project) => {
            return (
            <React.Fragment key={project.name}>
            <Link to={`/${TEXT.PAGE_TITLES.PROJECTS}`}>{project.name}</Link>
            </React.Fragment>
                   )
            })

    // TODO: insert UBC logo
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
               {renderedNavLinks}
                </div>

                <div>
                {renderedProjectLinks}
                </div>
            </>

           )       
}
        

export default Footer;
