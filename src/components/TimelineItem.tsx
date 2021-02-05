import * as React from "react"
import * as timelineStyles from "./Timeline.module.scss"
import { motion, Variants, useViewportScroll} from "framer-motion"
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
  company?: {
    display: string,
    link: string
  }
  location?: string
  usedList?: UsedListProps
  zIndex?: number
  filterKeyWord: string
}

interface timelineItemProps extends itemData {
  orientation: "left" | "right",
  children?: React.ReactNode
}

const containerVariants: Variants = {
  visible: {
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
  exit: {
    scale: 0,
    opacity: 0
  },
  hidden: {
    scale: 0,
    y: 50,
    opacity: 0,
  }
}

const bubbleVariants: Variants = {
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
  hidden: {
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

export const TimelineItem = ({orientation, showDay, list, zIndex, usedList, title, text, location, company, website, startDate, endDate, notEndedYet, children}: timelineItemProps) => {
  const {scrollYProgress} = useViewportScroll();

  scrollYProgress.onChange(x => {
    console.log(x);
  })

  let orientationStyle;
  if (
    orientation === undefined ||
    orientation == "left"
  ) {
    orientationStyle = timelineStyles.left
  } else if (orientation == "right") {
    orientationStyle = timelineStyles.right
  }
  var dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  }
  if (showDay) {
    dateOptions = { ...dateOptions, day: "numeric" }
  }
  var listToHtml;
  if (list) {
    listToHtml = list.map((value, index) => {
      return <li key={index}>{value}</li>;
    });
  }
  return (
  <motion.div
    className={[timelineStyles.container, orientationStyle].join(" ")}
    style={{zIndex: zIndex}}
    whileHover="hover"
    variants={containerVariants}
    exit="exit"
  >
    <div className={[timelineStyles.arrow, orientationStyle].join(" ")} />
    <motion.div
      variants={bubbleVariants}
      className={[timelineStyles.bubble, orientationStyle].join(" ")}
    />
    <div className={timelineStyles.content}>
      <div className={timelineStyles.date}>
        <h2 className={timelineStyles.startDate}>{startDate.toLocaleDateString("en-US", dateOptions)}</h2>
        {endDate || notEndedYet ? <div className={timelineStyles.endDateContainer}><h3 className={timelineStyles.splitter}>-</h3><h4 className={timelineStyles.endDate}>{endDate ? endDate.toLocaleDateString("en-US", dateOptions) : "Now"}</h4></div> : undefined}
      </div>
      <p className={timelineStyles.title}>{title}</p>
      <div className={timelineStyles.divider}/>
      <p>{text}</p>
      {children}
      {list ? <ul>{listToHtml}</ul> : undefined}
      {usedList ? <UsedList {...usedList}/> : undefined}
      <div className={timelineStyles.extraInfo}>
        {location ? <div className={timelineStyles.infoContainer}><TiLocationOutline className={timelineStyles.icon}/><p>{location}</p></div> : undefined}
        {company ? <div className={timelineStyles.infoContainer}><MdWork className={timelineStyles.icon}/><a href={company.link} target="_blank">{company.display}</a></div> : undefined}
        {website ? <div className={timelineStyles.infoContainer}><FiGlobe className={timelineStyles.icon}/><a href={website.link} target="_blank">{website.display}</a></div> : undefined}
      </div>
    </div>
  </motion.div>)
}