import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { text } = this.props;
    return (
      <li>
        <span>{text}</span>
      </li>
    );
  }
}
