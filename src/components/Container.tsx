import * as React from 'react'
import * as containerStyles from "./Container.module.scss"

export default class Container extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={containerStyles.container}>
        {this.props.children}
      </div>
    )
  }
}