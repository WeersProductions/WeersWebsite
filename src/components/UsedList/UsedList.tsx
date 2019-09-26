import React, {useRef} from 'react'
import * as usedListStyles from "./UsedList.module.scss"
import {UsedItem, UsedItemProps} from "./UsedItem";
import {ScrollDrag} from "./ScrollDrag";

export interface UsedListProps {
  items: UsedItemProps[];
}

export class UsedList extends React.Component<UsedListProps, {}> {
  constructor(props: UsedListProps) {
    super(props)
  }

  public render() {
    const items = this.props.items.map((value,id ) => {
      return (<UsedItem {...value} key={id}/>);
    });

    return (
      <ScrollDrag className={usedListStyles.viewPort}>
        <div className={usedListStyles.container}>
          {items}
        </div>
      </ScrollDrag>
    )
  }
}
