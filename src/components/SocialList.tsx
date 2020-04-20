import * as React from 'react'
import * as socialListStyles from './SocialList.module.scss'
import IconLinkedIn from "../components/Icons/IconLinkedIn"
import IconWebsite from './Icons/IconWebsite'

export default class SocialList extends React.Component<{}, {}> {
  public render() {
    return (
        <div className={socialListStyles.socialList}>
            <IconLinkedIn useHover={true} openWebpage="https://www.linkedin.com/in/floris-weers-61392b160"/>
            <IconWebsite useHover={true} openWebpage="https://www.weersproductions.com" iconName="WeersProductions.com"/>
        </div>
    )
  }
}