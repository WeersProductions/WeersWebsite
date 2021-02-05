import * as React from 'react'
import * as timelineStyles from "./Timeline.module.scss"
import {itemData, TimelineItem} from "./TimelineItem"
import {motion, Variants, AnimatePresence} from "framer-motion";
import { AnimateWhenVisible } from './Animations/AnimateWhenVisible';

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
  }

  public render() {
    function generateItem(item : itemData, index : number, array: itemData[]) {
        var orientation : 'left' | 'right' = 'left';
        if (index % 2 == 0) {
            orientation = 'right';
        }
        return (
          <AnimateWhenVisible>
            <TimelineItem
            key={item.title}
            orientation={orientation}
            zIndex={array.length - index}
            {...item}/>
          </AnimateWhenVisible>);
    }
    var itemsHtml = this.props.items.map(generateItem);

    return (
        //initial="disabled" animate="active"
          <motion.div variants={childrenSequenceVariant} className={timelineStyles.timeline}>
            <motion.div variants={splitterVariant} className={timelineStyles.topSplitter}/>
            <motion.div variants={timelineVariant} className={timelineStyles.line}/>
            {itemsHtml}
          </motion.div>
    );
  }
}