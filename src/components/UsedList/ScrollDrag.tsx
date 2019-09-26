import React from 'react';

interface ScrollDragProps {
    className: string
}

interface ScrollDragState {
    ref: React.RefObject<HTMLDivElement>
    isScrolling: boolean
    clientX: number
    scrollX: number
}

export class ScrollDrag extends React.Component<ScrollDragProps, ScrollDragState> {
  constructor(props: ScrollDragProps) {
    super(props);
    this.state = {
      isScrolling: false,
      clientX: 0,
      scrollX: 0,
      ref: React.createRef()
    };
  }

  onMouseDown = (e:any) => {
    this.setState({ ...this.state, isScrolling: true,
     clientX: e.clientX });
  };

  onMouseUp = () => {
    this.setState({ ...this.state, isScrolling: false });
  };

  onMouseMove = (e:any) => {
    const { clientX, scrollX, isScrolling} = this.state;
    console.log(clientX, scrollX, isScrolling);
    console.log(e);
    if (isScrolling) {
      // document.getElementById("test")!.scrollLeft -= e.movementX;
      // console.log(scrollX, e.clientX, clientX);
      // console.log(document.getElementById("test")!.scrollLeft);
      this.state.ref.current!.scrollLeft -= e.movementX;
      console.log(this.state.ref.current!.scrollLeft);
      this.setState({scrollX: scrollX + e.clientX - clientX});
      this.setState({clientX: e.clientX});
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