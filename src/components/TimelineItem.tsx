import * as React from "react"
import * as timelineStyles from "./Timeline.module.scss"
import { motion, Variants } from "framer-motion"
import {UsedList, UsedListProps} from "./UsedList/UsedList";
import {TiLocationOutline} from "react-icons/ti";
import {MdWork} from "react-icons/md";
import {FiGlobe} from "react-icons/fi";

export interface itemData {
  startDate: Date
  endDate?: Date
  notEndedYet?: boolean
  showDay?: boolean
  text: string
  list?: string[]
  title: string
  website?: {
    display: string,
    link: string
  }
  company?: string
  location?: string
  usedList?: UsedListProps
}

interface timelineItemProps extends itemData {
  orientation: "left" | "right"
}

const containerVariants: Variants = {
  active: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
  disabled: {
    scale: 0,
    y: 50,
    opacity: 0,
  },
  hover: {
    scale: 1.1,
  },
}

const bubbleVariants: Variants = {
  active: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
  disabled: {
    scale: 0,
    y: 50,
    opacity: 0,
  },
  hover: {
    rotateY: 180,
    transition: {
      rotateY: {
        duration: 0.3
      }
    }
  },
}

export class TimelineItem extends React.Component<timelineItemProps, {}> {
  public render() {
    var orientation
    if (
      this.props.orientation === undefined ||
      this.props.orientation == "left"
    ) {
      orientation = timelineStyles.left
    } else if (this.props.orientation == "right") {
      orientation = timelineStyles.right
    }
    var dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    }
    if (this.props.showDay) {
      dateOptions = { ...dateOptions, day: "numeric" }
    }
    var list;
    if (this.props.list) {
      list = this.props.list.map((value) => {
        return <li>{value}</li>;
      });
    }
    return (
      <motion.div
        className={[timelineStyles.container, orientation].join(" ")}
        whileHover="hover"
        variants={containerVariants}
      >
        <div className={[timelineStyles.arrow, orientation].join(" ")} />
        <motion.div
          variants={bubbleVariants}
          className={[timelineStyles.bubble, orientation].join(" ")}
        />
        <div className={timelineStyles.content}>
          <div className={timelineStyles.date}>
            <h2 className={timelineStyles.startDate}>{this.props.startDate.toLocaleDateString("en-US", dateOptions)}</h2>
            {this.props.endDate || this.props.notEndedYet ? <div className={timelineStyles.endDateContainer}><h3 className={timelineStyles.splitter}>-</h3><h4 className={timelineStyles.endDate}>{this.props.endDate ? this.props.endDate.toLocaleDateString("en-US", dateOptions) : "Now"}</h4></div> : undefined}
          </div>
          <p className={timelineStyles.title}>{this.props.title}</p>
          <div className={timelineStyles.divider}/>
          <p>{this.props.text}</p>
          {this.props.children}
          {this.props.list ? <ul>{list}</ul> : undefined}
          {this.props.usedList ? <UsedList {...this.props.usedList}/> : undefined}
          <div className={timelineStyles.extraInfo}>
            {this.props.location ? <div className={timelineStyles.infoContainer}><TiLocationOutline className={timelineStyles.icon}/><p>{this.props.location}</p></div> : undefined}
            {this.props.company ? <div className={timelineStyles.infoContainer}><MdWork className={timelineStyles.icon}/><p>{this.props.company}</p></div> : undefined}
            {this.props.website ? <div className={timelineStyles.infoContainer}><FiGlobe className={timelineStyles.icon}/><a href={this.props.website.link}>{this.props.website.display}</a></div> : undefined}
          </div>
        </div>
      </motion.div>
    )
  }
}
