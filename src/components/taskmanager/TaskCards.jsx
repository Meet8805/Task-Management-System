import { MdDelete, MdEdit } from "react-icons/md";
function TaskCards({ title, body, id, delid }) {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)} </p>
      </div>
      <div className="d-flex justify-content-around ">
        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1">
          <MdEdit className="card-icons" />
          Edit
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger"
          onClick={() => {
            delid(id);
          }}
        >
          <MdDelete className="card-icons del card-icon-head" />
          Delete
        </div>
      </div>
    </div>
  );
}

export default TaskCards;
