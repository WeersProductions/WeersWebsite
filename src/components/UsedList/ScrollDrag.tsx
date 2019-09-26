import React from 'react';

interface ScrollDragProps {
    className: string
}

interface ScrollDragState {
    ref: React.RefObject<HTMLDivElement>
    isScrolling: boolean
}

export class ScrollDrag extends React.Component<ScrollDragProps, ScrollDragState> {
  constructor(props: ScrollDragProps) {
    super(props);
    this.state = {
      isScrolling: false,
      ref: React.createRef()
    };
  }

  onMouseDown = (e:any) => {
    this.setState({ ...this.state, isScrolling: true});
    window.addEventListener('mouseup', this.onMouseUp);
  };

  onMouseUp = () => {
    this.setState({ ...this.state, isScrolling: false });
    window.removeEventListener('mouseup', this.onMouseUp);
  };

  onMouseMove = (e:any) => {
    const { isScrolling} = this.state;
    if (isScrolling) {
      this.state.ref.current!.scrollLeft -= e.movementX;
      e.preventDefault();
    }
  };

  render() {
    const { className } = this.props;
    const {ref} = this.state;
    return (
      <div
        ref={ref}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        className={className}
        id="test"
      >
        {/* {React.Children.map(this.props.children, child =>
            React.Children.only(child))} */}
            {this.props.children}
      </div>
    );
  }
}