import * as React from 'react'
import * as styles from './Index.module.scss'
import Container from "../components/container"

import Timeline from "../components/timeline"
import Header from "../components/Header"

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Container>
        <Header/>
        <Timeline/>
      </Container>
    )
  }
}