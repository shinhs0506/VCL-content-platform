import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

var classNames = require('classnames');

interface ButtonProps {
    text?: string
    // size?: "sm" | "lg" | undefined
    // type?: "create" | "get" | "delete"
    className: string
}

const useStyles = makeStyles({
    root: {
        background: "red",
    },
  });

export const GenericButton: React.FC<ButtonProps> = (props) => {

    const classes = classNames(props.className);

    return (
        <Button variant="contained" className={classes} >
            {props.text}
        </Button>
    );
}