import * as React from 'react'
import * as timelineStyles from "./Timeline.module.scss"
import TimelineItem from "./TimelineItem"
import {motion, Variants} from "framer-motion";

const variants: Variants = {
  active: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  disabled: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export default class Container extends React.Component<{}, {}> {
  public render() {
    const items = [
      {text:'Hiiiii!', date:new Date(2021, 12, 23)},
      {text:'Hi!', date:new Date(2017, 5, 21)},
      {text: 'asdfadsf', date:new Date(2018, 5, 21)},
      {text: 'A very long text, that is very cool!', date:new Date(2019, 5, 5)},
      {text: 'The future', date:new Date(2020, 4, 4)}
    ];

    items.sort((a,b)=>a.date.getTime()-b.date.getTime());

    function generateItem(item : {text: string, date: Date}, index : number) {
        var orientation : 'left' | 'right' = 'left';
        if (index % 2 == 0) {
            orientation = 'right';
        }
        return (
          <TimelineItem
            key={index.toString()}
            orientation={orientation}
            text={item.text}
            date={item.date}>
          </TimelineItem>);
    }
    var itemsHtml = items.map(generateItem);

    return (
        <motion.div initial="disabled" animate="active" variants={variants} className={timelineStyles.timeline}>
            <div className={timelineStyles.line}/>
            {itemsHtml}
        </motion.div>
    );
  }
}