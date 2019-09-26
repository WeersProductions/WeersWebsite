import * as React from "react"
import * as usedListStyles from "./UsedList.module.scss"

export interface UsedItemProps {
  icon: any
  name: string
}

export interface UsedItemState {
  expanded: boolean
}

export class UsedItem extends React.Component<UsedItemProps, UsedItemState> {
  constructor(props: UsedItemProps) {
    super(props);
    this.state = {expanded: false};
  }

  switchExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({expanded: !this.state.expanded});
  }

  public render() {
    return (
      <div onClick={this.switchExpand} className={usedListStyles.item}>
        <div className={usedListStyles.icon}>{this.props.icon}</div>
        {this.state.expanded ? <div className={usedListStyles.text}>{this.props.name}</div> : undefined}
      </div>
    )
  }
}
