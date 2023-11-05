import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
        <>
            <h3>{this.props.studentId}</h3>
            <h4>{this.props.name}</h4>
            <h5>{this.props.college}</h5>
        </>
    )
  }
}
