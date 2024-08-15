import React, { Component } from 'react';

export default class BoxClass extends Component {
  render() {
    return (
      <div
        className={`box ${
          this.props.result === 1
            ? 'win'
            : this.props.result === 0
            ? 'lose'
            : null
        }`}
      >
        <div className='title'>{this.props.title}</div>
        <img className='item-img' src={this.props.item?.img} alt='' />
        <div className='result'>
          {this.props.result === 1
            ? 'WIN🥰'
            : this.props.result === 0
            ? 'LOSE😥'
            : this.props.result}
        </div>
      </div>
    );
  }
}
