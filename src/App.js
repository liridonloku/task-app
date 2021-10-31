import React from "react";
import OverView from "./components/Overview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tasks: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let text = document.getElementById("newTask").value;
    let newTasks = this.state.tasks;
    if (text) {
      newTasks.push(text);
    }
    document.getElementById("newTask").value = "";
    this.setState({
      text: "",
      tasks: newTasks,
    });
  }

  render() {
    return (
      <div>
        <div className="App"> Task App!</div>
        <div className="New">
          <input name="newTask" id="newTask" placeholder="New Task"></input>
          <button onClick={this.handleClick}>Submit</button>
        </div>
        <div>
          <OverView tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
