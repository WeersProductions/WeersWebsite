import React from 'react';

interface ScrollDragProps {
    className: string
}

interface ScrollDragState {
    ref: React.RefObject<HTMLDivElement>
    isScrolling: boolean
    preventClick: boolean
}

export class ScrollDrag extends React.Component<ScrollDragProps, ScrollDragState> {
  constructor(props: ScrollDragProps) {
    super(props);
    this.state = {
      isScrolling: false,
      ref: React.createRef(),
      preventClick: false
    };
  }

  onMouseDown = (e:any) => {
    this.setState({isScrolling: true});
    window.addEventListener('mouseup', this.onMouseUp);
  };

  onMouseUp = (e:any) => {
    if(this.state.isScrolling) {
      console.log("todo: prevent click on icon.");
      e.preventDefault();
      e.stopPropagation();
      this.setState({isScrolling: false, preventClick: true});
    }
    window.removeEventListener('mouseup', this.onMouseUp);
  };

  onMouseMove = (e:any) => {
    const { isScrolling} = this.state;
    if (isScrolling) {
      this.state.ref.current!.scrollLeft -= e.movementX;
      e.preventDefault();
    }
  };

  onClick = (e:any) => {
    const target = e.target;
    console.log(this.state.preventClick, target.id !== 'scrollContainer');
    if (this.state.preventClick && target.id !== 'scrollContainer') {
      e.stopPropagation();
      e.preventDefault();
      this.setState({preventClick: false});
    }
  }

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
        onClickCapture={this.onClick}
        id="scrollContainer"
      >
            {this.props.children}
      </div>
    );
  }
}