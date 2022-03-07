import { useDispatch, useSelector } from "react-redux";
import {
  addList,
  clearList,
  clearTask,
  doneTask,
  undoTask,
} from "./redux/actions/todoActions";
import { useState, useEffect } from "react";
export default function TodoList() {
  //   const lista = useSelector((store) => store.todoReducer.lista);
  const lista = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [listStatus, setListStatus] = useState("ALL");
  console.log("listStatus", listStatus);
  return (
    <>
      <div className="todo w-{500px} h-96 bg-slate-500 m-0.5">
        <input
          onClick={() => setListStatus("ALL")}
          type="radio"
          name="listStatus"
          value="ALL"
        />
        ALL
        <input
          onClick={() => setListStatus("DONE")}
          type="radio"
          name="listStatus"
          value="DONE"
        />
        DONE
        <input
          onClick={() => setListStatus("TODO")}
          type="radio"
          name="listStatus"
          value="TODO"
        />
        TODO
        <input
          className=" m-0.5"
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button
          className="  m-0.5 bg-slate-50 h-6"
          onClick={() => dispatch(addList(task))}
        >
          add
        </button>
        <button
          className=" m-0.5 ml-16 mt-4 bg-slate-50 h-6"
          onClick={() => dispatch(clearList())}
        >
          reset
        </button>
        <ul>
          {lista.map((x, i) => (
            <li
              className={
                "grid grid-cols-6 gap-4 " +
                (listStatus === "ALL"
                  ? ""
                  : listStatus === "DONE" && x.done === true
                  ? ""
                  : listStatus === "TODO" && x.done === false
                  ? ""
                  : " hidden")
              }
              key={i}
            >
              <label> {x.task}</label>
              <label className>DONE</label>
              <input
                className=""
                type="checkbox"
                title="task"
                onChange={() => dispatch(doneTask(i))}
              />
              <label className>UNDO</label>
              <input
                className=""
                type="checkbox"
                title="task"
                onChange={() => dispatch(undoTask(i))}
              />

              <button
                className=" m-0.5 ml-16  bg-slate-50 W-6 h-6"
                onClick={() => dispatch(clearTask(i))}
              >
                🗑
              </button>
            </li>
          ))}
          {/* <li class="task-li">
            <input class="fav-todo-checkbox" type="checkbox" value="false">
            <label class="done-task">he</label>
            <input class="toggle-todo-checkbox" type="checkbox" value="true">
            <button class="delete-task-btn" value="delete">🗑</button>
        </li> */}
        </ul>
      </div>
    </>
  );
}
