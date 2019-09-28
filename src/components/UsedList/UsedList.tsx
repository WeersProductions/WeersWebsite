import React, {useRef} from 'react'
import * as usedListStyles from "./UsedList.module.scss"
import {ScrollDrag} from "./ScrollDrag";

export interface UsedListProps {
  items: JSX.Element[];
}

export class UsedList extends React.Component<UsedListProps, {}> {
  constructor(props: UsedListProps) {
    super(props)
  }

  public render() {
    return (
      <ScrollDrag className={usedListStyles.viewPort}>
        <div className={usedListStyles.container}>
          {this.props.items}
        </div>
      </ScrollDrag>
    )
  }
}
