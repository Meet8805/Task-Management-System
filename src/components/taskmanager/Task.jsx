import { useState } from "react";
import "./Task.css";
import TaskCards from "./TaskCards";

function Task() {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const [array, setArray] = useState([]);

  function change(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function addTask() {
    if (!inputs.title.trim() || !inputs.body.trim()) {
      return;
    }

    setArray((prev) => [...prev, inputs]);

    setInputs({
      title: "",
      body: "",
    });
  }

  function del(index) {
    setArray(array.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index === 0) return;

    const newArray = [...array];

    [newArray[index], newArray[index - 1]] = [
      newArray[index - 1],
      newArray[index],
    ];

    setArray(newArray);
  }

  function moveDown(index) {
    if (index === array.length - 1) return;

    const newArray = [...array];

    [newArray[index], newArray[index + 1]] = [newArray[index], newArray[index]];

    setArray(newArray);
  }

  function show() {
    document.getElementsByTagName("textarea")[0].style.display = "block";
  }

  return (
    <div className="todo">
      <div className="todo-main container d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex flex-column w-50 todo-inputs-div p-1">
          <input
            type="text"
            placeholder="Title"
            className="my-2 p-2 todo-inputs"
            name="title"
            value={inputs.title}
            onChange={change}
            onClick={show}
          />

          <textarea
            name="body"
            placeholder="Enter task description..."
            className="p-2 todo-inputs"
            value={inputs.body}
            onChange={change}
          />
        </div>

        <div className="w-50 d-flex justify-content-end my-3">
          <button className="btn-nav px-2 py-1" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>

      <div className="todo-body">
        <div className="container-fluid">
          <div className="row">
            {array.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-12 my-3"
              >
                <TaskCards
                  title={item.title}
                  body={item.body}
                  id={index}
                  delid={del}
                  moveUp={moveUp}
                  moveDown={moveDown}
                  totalTasks={array.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
