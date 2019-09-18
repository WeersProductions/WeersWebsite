import * as React from 'react'
import * as styles from './Index.module.scss'
import Container from "../components/container"
import Title from "../components/title"
import Timeline from "../components/timeline"

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Container>
        <Title>
            Floris Weers
        </Title>
        <p>
            A simple scroll through all projects I've done so far.
        </p>
        <Timeline/>
    </Container>
    )
  }
}