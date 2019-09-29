import * as React from "react"
import * as headerStyles from "./Header.module.scss"
import Title from "./title"

export default class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.header}>
          <span className={headerStyles.image}>
            <img src="static/images/ProfilePicture.jpeg" />
          </span>
          <div className={headerStyles.text}>
            <Title>Floris Weers</Title>
            <p>A simple scroll through all projects I've done so far.</p>
          </div>
        </div>
      </div>
    )
  }
}
