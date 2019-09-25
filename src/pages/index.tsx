import * as React from "react"
import * as styles from "./Index.module.scss"
import Container from "../components/container"

import {timelineProps, Timeline} from "../components/timeline"
import Header from "../components/Header"

interface IndexPageProps { }

const tlProps : timelineProps = {items: [
  {
    text: "Hiiiii!",
    date: new Date(2021, 11, 23),
    showDay: true
  },
  {
    text: "Hi!",
    date: new Date(2017, 5, 21)
  },
  {
    text: "asdfadsf",
    date: new Date(2018, 5, 21)
  },
  {
    text: "A very long text, that is very cool!",
    date: new Date(2019, 5, 5)
  },
  {
    text: "The future",
    date: new Date(2020, 4, 4),
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
