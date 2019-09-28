import * as React from "react"
import * as styles from "./Index.module.scss"
import Container from "../components/container"

import {timelineProps, Timeline} from "../components/timeline"
import Header from "../components/Header"
import IconPython from "../components/Icons/IconPython"
import IconReact from "../components/Icons/IconReact"
import IconJava from "../components/Icons/IconJava"

interface IndexPageProps { }

const tlProps : timelineProps = {items: [
  {
    title: "Junior developer",
    text: "I wrote software that automatically generates test reports based on the selected machine component. Engineers will enter their test results and the measurements will be checked on correctness.",
    startDate: new Date(2016, 5, 0),
    endDate: new Date(2016, 8, 0),
    showDay: false,
    location: "Oldenzaal, Netherlands",
    company: "Parker"
  },
  {
    title: "Teaching Assistant",
    text: "Helping students with Java and associated math problems.",
    startDate: new Date(2017, 8, 0),
    endDate: new Date(2018, 1, 0),
    usedList: {
      items:
        [<IconJava key="Java"/>]
    }
  },
  {
    title: "Software Development Intern",
    text: "asdfadsf",
    startDate: new Date(2018, 5, 21)
  },
  {
    title: "",
    text: "A very long text, that is very cool!",
    startDate: new Date(2019, 5, 5)
  },
  {
    title: "",
    text: "The future",
    startDate: new Date(2020, 4, 4),
    showDay: true
  },
]}

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
