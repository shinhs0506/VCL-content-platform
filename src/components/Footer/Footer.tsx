import React from 'react';
import { TEXT, NAVBAR } from '@statics';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import GenericLink from '@components/generics/Link';
import './Footer.css'

const Footer = () => {

    const projects = useAppSelector(selectProjects);

    // TODO: insert UBC logo
    return (
            <>
                {/* lab information */}
                <div className="info">
                    <ul>Tel {TEXT.LAB_INFO.TEL}</ul>
                    <ul>Fax {TEXT.LAB_INFO.FAX}</ul>
                    <ul>Lab {TEXT.LAB_INFO.EMAIL}</ul>
                    <ul>Dr. Rensink {TEXT.LAB_INFO.DRRENSINK_CONTACT}</ul>
                    <ul>{TEXT.COMMON.TITLE} {TEXT.LAB_INFO.CAMPUS}</ul>
                </div>

                {/* navigation links */}
                <div className="nav">
                    {TEXT.PAGE_TITLES.NAVIGATE} 
                    {NAVBAR.map(({ TITLE, REF }) => {
                        return (
                            <li>
                                <GenericLink 
                                    name={TITLE}
                                    re={REF}
                                />
                            </li>
                        )
                    })}
                </div>

                {/* project links */}
                <div className="project">
                    {TEXT.PAGE_TITLES.PROJECTS} 
                    {projects.map((project) => {
                        return (
                            <li>
                                <GenericLink 
                                    name={project.name}
                                    re={`/${TEXT.PAGE_TITLES.PROJECTS}/${project.name}`}
                                />
                            </li>
                        ) 
                    })}
                </div>
            </>

           )       
}
        

export default Footer;
