import React, {useRef} from 'react'
import * as usedListStyles from "./UsedList.module.scss"
import ScrollContainer from 'react-indiana-drag-scroll';

export interface UsedListProps {
  items: JSX.Element[];
}

export class UsedList extends React.Component<UsedListProps, {}> {
  constructor(props: UsedListProps) {
    super(props)
  }

  public render() {
    return (
      <ScrollContainer vertical={false} horizontal={true} nativeMobileScroll={true} className={usedListStyles.viewPort}>
        <div className={usedListStyles.container}>
          {this.props.items}
        </div>
      </ScrollContainer>
    )
  }
}
