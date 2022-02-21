import React from 'react';
import { useLocation } from 'react-router-dom';
import { Drawer, List, ListItem } from '@material-ui/core'; 
import GenericLink from '@components/generics/Link';

interface ProjectNavbarParams {
    // project_name: string;
    // ref: any;
    isOpen: boolean;
    links: { title: string, ref: string }[];
}

const ProjectNavbar: React.FC<ProjectNavbarParams> = (props) => {
    const location = useLocation();

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={props.isOpen}
            PaperProps={{ style: { position: 'relative' } }}
            ModalProps={{
                container: document.getElementById('container-container'),
            }}
        >
        <List>
            {props.links.map((link, index) => (
                <ListItem button key={link.title}>
                    <GenericLink 
                        name={link.title}
                        to={link.ref}
                        />
                </ListItem>
            ))}
        </List>
            
        </Drawer>
    );
}

export default ProjectNavbar;
