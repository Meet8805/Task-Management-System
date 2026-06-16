import { useState } from "react";
import "./Task.css";
import TaskCards from "./TaskCards";


function Task() {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);

  function change(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function submit() {
    setArray([...array, inputs]);
    setInputs({ title: "", body: "" });
    toast.success("Your Task is added")
  }

  function del(id){
    array.splice(id,"1");
    setArray([...array]);
  }

  function show() {
    document.getElementById("textarea").style.display = "block";
  }

  return (
    <div className="todo">
      <div className="todo-main container d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex flex-column w-50 todo-inputs-div p-1 ">
          <input
            type="text"
            placeholder="Title"
            className="my-2 p-2 todo-inputs"
            onClick={show}
            name="title"
            value={inputs.title}
            onChange={change}
          />
          <textarea
            name="body"
            placeholder="Enter task decription..."
            className=" p-2 todo-inputs"
            id="textarea"
            value={inputs.body}
            onChange={change}
          />
        </div>
        <div className="w-50 d-flex justify-content-end my-3">
          <button className="btn-nav px-2 py-1 " onClick={submit}>
            Add Task
          </button>
        </div>
      </div>
      <div className="todo-body">
        <div className="container-fluid">
          <div className="row">
            {array &&
              array.map((item, index) => (
                <div key={index} className="col-lg-3 col-10 mx-5 my-2 ">
                  <TaskCards title={item.title} body={item.body} id={index}  delid={del} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
