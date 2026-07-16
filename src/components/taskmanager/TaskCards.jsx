import { MdDelete, MdEdit } from "react-icons/md";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function TaskCards({
  title,
  body,
  id,
  delid,
  editTask,
  moveUp,
  moveDown,
  totalTasks,
}) {
  return (
    <div className="p-3 todo-card">

      <div>
        <h5>{title}</h5>

        <p className="todo-card-p">
          {body}
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">

  <button
    className="btn btn-sm btn-secondary"
    disabled={id === 0}
    onClick={() => moveUp(id)}
  >
    <FaArrowUp /> Up
  </button>

  <button
    className="btn btn-sm btn-danger"
    onClick={() => delid(id)}
  >
    <MdDelete /> Delete
  </button>

  <button
    className="btn btn-sm btn-secondary"
    disabled={id === totalTasks - 1}
    onClick={() => moveDown(id)}
  >
    <FaArrowDown /> Down
  </button>

</div>
      

    </div>
  );
}

export default TaskCards;