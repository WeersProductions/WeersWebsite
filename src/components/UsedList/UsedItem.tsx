import * as React from "react"
import * as usedListStyles from "./UsedList.module.scss"

export interface UsedItemProps {
  icon: any
  name: string
}

export class UsedItem extends React.Component<UsedItemProps, {}> {
  constructor(props: UsedItemProps) {
    super(props)
  }

  public render() {
    return <div>{this.props.name}</div>
  }
}
