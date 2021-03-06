import * as React from "react"
import * as headerStyles from "./Header.module.scss"
import Title from "./Title"
import profilePicture from "./ProfilePicture.jpeg"
import SocialList from "./SocialList"
import { FilterList, filter } from "./FilterList"

interface headerProps {
  filters: filter[]
  onFilterChange: (change: filter) => void
}

export default class Header extends React.Component<headerProps, {}> {
  public render() {
    return (
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.header}>
          <span className={headerStyles.image}>
            <img src={profilePicture} />
          </span>
          <div className={headerStyles.infoContainer}>
            <div className={headerStyles.text}>
              <Title>Floris Weers</Title>
              <p>A simple scroll through all projects I've done so far.</p>
            </div>
            <SocialList />
          </div>
        </div>
        <FilterList
          onChange={this.props.onFilterChange}
          filters={this.props.filters}
        />
      </div>
    )
  }
}
