import React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
    name: string;
    re: string;
    className?: string;
}

const GenericLink: React.FC<LinkProps> = (props) => {
    const { name , re, className } = props;

    return (
        <React.Fragment key={re}>
            <Link className={className} to={re}>{name}</Link>
        </React.Fragment>
    )

}

export default GenericLink;
