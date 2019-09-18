import * as React from 'react'
import * as timelineStyles from "./timeline.module.scss"

type timelineItemProps = {
    orientation : 'left' | 'right',
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
        <div className={[timelineStyles.container, orientation].join(" ")}>
            <div className={[timelineStyles.bubble, orientation].join(" ")}/>
            <div className={timelineStyles.content}>
                <h2>2017</h2>
                <p>asdf</p>
                {this.props.children}
            </div>
        </div>
    )
  }
}