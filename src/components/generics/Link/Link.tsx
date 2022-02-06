import React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
    name: string;
    re: string;
}

const GenericLink: React.FC<LinkProps> = (props) => {
    const { name , re } = props;

    return (
        <React.Fragment key={re}>
            <Link to={re}>{name}</Link>
        </React.Fragment>
    )

}

export default GenericLink;
