import React from "react";
import OverView from "./components/Overview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tasks: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("hey");
    let text = document.getElementById("newTask").value;
    console.log(text);
    let newTasks = this.state.tasks;
    if (text) {
      newTasks.push(text);
    }
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
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div>
          <OverView tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
