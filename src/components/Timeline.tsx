import * as React from 'react'
import * as timelineStyles from "./timeline.module.scss"
import TimelineItem from "./timelineItem"

export default class Container extends React.Component<{}, {}> {
  public render() {
    var items = ['Hiiiii!', 'Hi!', 'asdfadsf', 'A very long text, that is very cool!', 'asdf'];
    function generateItem(text : string, index : number) {
        var orientation : 'left' | 'right' = 'left';
        if (index % 2 == 0) {
            orientation = 'right';
        }
        return (<TimelineItem
            key={index.toString()}
            orientation={orientation}>{text}
            </TimelineItem>);
    }
    var itemsHtml = items.map(generateItem);

    return (
        <div className={timelineStyles.timeline}>
            <div className={timelineStyles.line}/>
            {itemsHtml}
        </div>
    );
  }
}