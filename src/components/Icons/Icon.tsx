import * as React from "react"
import * as IconStyles from "./Icon.module.scss"
import {motion, Variants} from "framer-motion"

export interface IconProps {
}

export interface IconState {
  expanded: boolean;
}

const layoutTransition = {
  type: "spring",
  damping: 12,
  stiffness: 100
}

const textVariants: Variants = {
  visible: {
    width: 'auto',
    opacity: 1
  },
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.1
      }
    }
  }
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
    const animationState:string = this.state.expanded ? "visible" : "hidden";
    return <div onClick={this.switchExpand} className={IconStyles.container + " " + this.name}>
        <div className={IconStyles.icon}>{this.IconSVG}</div>
        <div >
          <motion.div variants={textVariants} initial="hidden" animate={animationState} className={IconStyles.text}>{this.name}</motion.div>
        </div>
      </div>
  }
}
