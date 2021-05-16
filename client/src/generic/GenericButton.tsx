import Button from 'react-bootstrap/Button';
import './GenericButton.css'

interface ButtonProps {
    text?: string
    size?: "sm" | "lg" | undefined
    type?: "create" | "get" | "delete"
}

function renderSwitch(type: string | undefined) {
    switch(type) {
        case "create": 
            return <i className="fas fa-plus-circle"/>;
        case "get":
            return <i className="fas fa-hand-point-right"/>;
        case "delete":
            return <i className="fas fa-times-circle"/>;
    }
}

export const GenericButton: React.FC<ButtonProps> = (props) => {
    return (
        <div className="Button-wrapper">
            <Button variant="primary" size={props.size}>
                {renderSwitch(props.type)}
                {props.type && props.text && <span>&nbsp;</span>}
                {props.text}
            </Button>
        </div>
    );
}