import * as React from "react"
import * as IconStyles from "./Icon.module.scss"

export interface IconProps {
}

export interface IconState {
  expanded: boolean;
}

export default class Icon extends React.Component<IconProps, IconState> {
  IconSVG?: JSX.Element
  name?: string

  constructor(props: IconProps) {
    super(props);
    this.state = {expanded: false};
  }

  switchExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({expanded: !this.state.expanded});
  }

  public render() {
    return <div onClick={this.switchExpand} className={IconStyles.container + " " + this.name}>
        <div className={IconStyles.icon}>{this.IconSVG}</div>
        {this.state.expanded ? <div className={IconStyles.text}>{this.name}</div> : undefined}
      </div>
  }
}
