import React from "react";

class SingleTask extends React.Component {
  render() {
    const task = this.props.task;
    return <div>{task}</div>;
  }
}

class OverView extends React.Component {
  render() {
    const tasks = [];
    this.props.tasks.forEach((task) => {
      tasks.push(<SingleTask task={task} />);
    });
    return <div>{tasks}</div>;
  }
}

export default OverView;
