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
      let key = Math.floor(Math.random() * 1000000000);
      tasks.push(<SingleTask key={key} task={task} />);
    });
    return <div>{tasks}</div>;
  }
}

export default OverView;
