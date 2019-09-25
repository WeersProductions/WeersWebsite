import * as React from 'react'
import * as timelineStyles from "./Timeline.module.scss"
import {motion, Variants} from "framer-motion";

export interface itemData {
    date: Date,
    showDay?: boolean
    text: string,
}

interface timelineItemProps extends itemData {
    orientation : 'left' | 'right',
}

const containerVariants: Variants = {
    active: {
        scale: 1, y: 0, opacity: 1
    },
    disabled: {
        scale: 0, y: 50, opacity: 0
    },
    hover: {
        scale: 1.1
    }
}

const bubbleVariants: Variants = {
    active: {
        scale: 1, y: 0, opacity: 1
    },
    disabled: {
        scale: 0, y: 50, opacity: 0
    },
    hover: {
        rotateY: 180,
        transition: {
            duration: 0.3
        }
    }
}

export class TimelineItem extends React.Component<timelineItemProps, {}> {
  public render() {
    var orientation;
    if(this.props.orientation===undefined || this.props.orientation=='left') {
        orientation = timelineStyles.left;
    } else if(this.props.orientation=='right') {
        orientation =  timelineStyles.right;
    }
    var dateOptions : Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long'};
    if (this.props.showDay) {
        dateOptions = {...dateOptions, day:'numeric'};
    }
    return (
        <motion.div className={[timelineStyles.container, orientation].join(" ")} whileHover="hover" variants={containerVariants}>
            <div className={[timelineStyles.arrow, orientation].join(" ")}/>
            <motion.div variants={bubbleVariants} className={[timelineStyles.bubble, orientation].join(" ")}/>
            <div className={timelineStyles.content}>
                <h2>{this.props.date.toLocaleDateString("en-US", dateOptions)}</h2>
                <p>{this.props.text}</p>
                {this.props.children}
            </div>
        </motion.div>
    )
  }
}