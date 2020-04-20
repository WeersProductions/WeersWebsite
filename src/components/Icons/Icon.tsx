import * as React from "react"
import * as IconStyles from "./Icon.module.scss"
import {motion, Variants} from "framer-motion"

export interface IconProps {
  useHover?: boolean;
  openWebpage?: string;
  iconName?: string;
}

export interface IconState {
  expanded: boolean;
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

  openWebpage = () => {
    if (this.props.openWebpage) {
      window.open(this.props.openWebpage, "_blank");
    }
  }

  switchExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({expanded: !this.state.expanded});
    this.openWebpage();
  }

  public render() {
    const animationState:string = this.state.expanded ? "visible" : "hidden";
    let content = <>
        <div className={IconStyles.icon}>{this.IconSVG}</div>
        <motion.div variants={textVariants} className={IconStyles.text}>{this.name}</motion.div>
    </>
    let className = IconStyles.container + " " + this.name;

    if (this.props.useHover) {
      return <motion.div whileHover="visible" initial="hidden" className={className} onClick={this.openWebpage}>
        {content}
      </motion.div>
    }

    return <motion.div onClick={this.switchExpand} animate={animationState} initial="hidden" className={className}>
        {content}
      </motion.div>
  }
}
