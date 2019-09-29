import * as React from "react"
import * as styles from "./Index.module.scss"
import Container from "../components/container"

import { timelineProps, Timeline } from "../components/timeline"
import Header from "../components/Header"
import IconPython from "../components/Icons/IconPython"
import IconReact from "../components/Icons/IconReact"
import IconJava from "../components/Icons/IconJava"
import IconVBNet from "../components/Icons/IconVBNet"
import IconAndroid from "../components/Icons/IconAndroid"
import IconiOS from "../components/Icons/IconIphone"
import IconHoloLens from "../components/Icons/IconHoloLens"
import IconMagicLeap from "../components/Icons/IconMagicLeap"
import IconCPlusPlus from "../components/Icons/IconCPlusPlus"
import IconCSharp from "../components/Icons/IconCSharp"
import IconUnity from "../components/Icons/IconUnity"

interface IndexPageProps {}

const tlProps: timelineProps = {
  items: [
    {
      title: "Junior developer",
      text:
        "I wrote software that automatically generates test reports based on the selected machine component. Engineers will enter their test results and the measurements will be checked on correctness.",
      startDate: new Date(2016, 5, 0),
      endDate: new Date(2016, 8, 0),
      showDay: false,
      location: "Oldenzaal, Netherlands",
      company: "Parker Hannifin",
      usedList: {
        items: [<IconVBNet key="VB.net" />],
      },
    },
    {
      title: "Teaching Assistant",
      text: "Helping students with Java and associated math problems.",
      startDate: new Date(2017, 8, 0),
      endDate: new Date(2018, 1, 0),
      usedList: {
        items: [<IconJava key="Java" />],
      },
      location: "Enschede",
      company: "University of Twente",
    },
    {
      title: "Software Development Intern",
      text:
        "Joined Jaunt's Research & Development team as a software engineering intern. ",
      startDate: new Date(2018, 2, 0),
      endDate: new Date(2018, 7),
      location: "Silicon Valley, California",
      company: "JauntXR",
      usedList: {
        items: [
          <IconCPlusPlus key="CPlusPlus" />,
          <IconCSharp key="C#" />,
          <IconUnity key="Unity" />,
          <IconAndroid key="Android" />,
          <IconiOS key="iOS" />,
          <IconHoloLens key="HoloLens" />,
          <IconMagicLeap key="MagicLeap" />,
        ],
      },
    },
    {
      title: "CEO",
      text:
        "Founded my own game-development company to release 'Rule Your School', a game for Steam.",
      startDate: new Date(2019, 5, 5),
      website: "www.weersproductions.com",
    },
    {
      title: "",
      text: "The future",
      startDate: new Date(2020, 4, 4),
      showDay: true,
    },
  ],
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Container>
        <Header />
        <Timeline items={tlProps.items} />
      </Container>
    )
  }
}
