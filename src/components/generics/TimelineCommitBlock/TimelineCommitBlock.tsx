import React, {useState} from "react";
import moment from "moment";
import Chip from '@material-ui/core/Chip';

interface TimelineCommitBlockProps {
    author: string;
    elementChanged: string;
    project: string;
    date: Date;
    description: string;
    tags: Array<string>;
}

const TimelineCommitBlock: React.FC<TimelineCommitBlockProps> = (props) => {
    const [expand, setExpand] = useState(false);

    return(
        <div style={{textAlign:"left"}}
             onClick={() => setExpand(!expand)}>
            { expand ? ExpandedTimelineContent(props): ClosedTimelineContent(props) }
        </div>
    );
};

const ExpandedTimelineContent: React.FC<TimelineCommitBlockProps> = (props) => {
    const { author, elementChanged, date, project,description, tags } = props;

    return(
        <div style={{textAlign:"left"}}> {/** Basic styling, move to css file **/}
            <p>{author} added {elementChanged} to {project}</p>
            <p>{moment(date).format('MMMM DD, YYYY')}</p>
            <div> 
            {/** style={{display:"flex", flexWrap:"wrap", flexDirection:"row"}} **/}
            {tags.map((tagName) => (
                <Chip
                 label={tagName}
                />
            ))}
            </div>
            <p>{description}</p>
        </div>
    );
}
const ClosedTimelineContent: React.FC<TimelineCommitBlockProps> = (props) => {
    const { author, elementChanged, date, project,description, tags } = props;

    return(
        <div style={{textAlign:"left"}}>
            <p>{author} added {elementChanged} to {project}</p>
            <p>{moment(date).format('MMMM DD, YYYY')}</p>
            <p>{description}</p>
        </div>
    );
}

export default TimelineCommitBlock;
