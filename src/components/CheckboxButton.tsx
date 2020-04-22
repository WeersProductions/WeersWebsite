import * as React from 'react'
import * as checkboxButtonStyles from "./CheckboxButton.module.scss"
import {FiCircle, FiCheckCircle} from "react-icons/fi"

export interface checkboxButtonProps {
    text: string;
    checked: boolean;
    onChange: (checked: boolean) => void
}

export interface checkboxButtonState {

}

export default class CheckboxButton extends React.Component<checkboxButtonProps, checkboxButtonState> {
  constructor(props: checkboxButtonProps) {
    super(props);
    this.state = {checked: props.checked};
  }

  public render() {
    let classNames = [checkboxButtonStyles.container]
    if (this.props.checked) {
      classNames.push(checkboxButtonStyles.selected);
    }
    return (
      <button onClick={() => this.props.onChange(!this.props.checked)} className={classNames.join(" ")}>
        {this.props.checked ? <FiCheckCircle/> : <FiCircle/>} <div>{this.props.text}</div>
      </button>
    )
  }
}