import * as React from 'react'
import * as titleStyles from "./container.module.scss"

export default class Container extends React.Component<{}, {}> {
  public render() {
    return (
        <h1 className={titleStyles.title}>
            {this.props.children}
        </h1>
    )
  }
}