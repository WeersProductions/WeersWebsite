import * as React from 'react'
import * as timelineStyles from "./Timeline.module.scss"
import {motion, Variants} from "framer-motion";

type timelineItemProps = {
    orientation : 'left' | 'right',
    date : Date,
    text: string
}

const variants: Variants = {
    active: {scale: 1, y: 0, opacity: 1, transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5
    }},
    disabled: {scale: 0, y: 50, opacity: 0, transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5
    }}
}

export default class TimelineItem extends React.Component<timelineItemProps, {}> {
  public render() {
    var orientation;
    if(this.props.orientation=='left') {
        orientation = timelineStyles.left;
    } else if(this.props.orientation=='right') {
        orientation =  timelineStyles.right;
    }
    return (
        <motion.div variants={variants}>
            <div className={[timelineStyles.container, orientation].join(" ")}>
            <div className={[timelineStyles.arrow, orientation].join(" ")}/>
                <div className={[timelineStyles.bubble, orientation].join(" ")}/>
                <div className={timelineStyles.content}>
                    <h2>{this.props.date.toDateString()}</h2>
                    <p>{this.props.text}</p>
                    {this.props.children}
                </div>
            </div>
        </motion.div>
    )
  }
}