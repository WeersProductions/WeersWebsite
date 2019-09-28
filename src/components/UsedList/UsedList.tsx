import React, {useRef} from 'react'
import * as usedListStyles from "./UsedList.module.scss"
import {ScrollDrag} from "./ScrollDrag";
import Icon from '../Icons/Icon';
import IconPython from '../Icons/IconPython';
import IconReact from '../Icons/IconReact';

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
