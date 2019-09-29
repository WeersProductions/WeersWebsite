import * as React from 'react'
import * as timelineStyles from "./Timeline.module.scss"
import {itemData, TimelineItem} from "./TimelineItem"
import {motion, Variants} from "framer-motion";

const childrenSequenceVariant: Variants = {
  active: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  disabled: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const timelineVariant: Variants = {
  active: {
    scaleY: 1,
    transition: {
      ease: "easeOut",
      duration: 0.2
    }
  },
  disabled: {
    scaleY: 0
  }
}

const splitterVariant: Variants = {
  active: {
    scaleX: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5
    }
  },
  disabled: {
    scaleX: 0,
    transition: {
      duration: 0.2
    }
  }
}

export interface timelineProps {
  items: itemData[];
}

interface timelineState {
  items: itemData[];
}

export class Timeline extends React.Component<timelineProps, timelineState> {
  constructor(props: timelineProps) {
    super(props);
    this.state = {items: this.props.items.sort((a,b)=>b.startDate.getTime()-a.startDate.getTime())};
  }

  public render() {
    function generateItem(item : itemData, index : number, array: itemData[]) {
        var orientation : 'left' | 'right' = 'left';
        if (index % 2 == 0) {
            orientation = 'right';
        }
        return (
          <TimelineItem
            key={index.toString()}
            orientation={orientation}
            zIndex={array.length - index}
            {...item}/>);
    }
    var itemsHtml = this.state.items.map(generateItem);

    return (
        <motion.div initial="disabled" animate="active" variants={childrenSequenceVariant} className={timelineStyles.timeline}>
          <motion.div variants={splitterVariant} className={timelineStyles.topSplitter}/>
          <motion.div variants={timelineVariant} className={timelineStyles.line}/>
          {itemsHtml}
        </motion.div>
    );
  }
}