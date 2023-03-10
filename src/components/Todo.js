import React, { useState } from "react";
import { useDispatch } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./todo.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Youtr List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-"
              onClick={() => dispatch(addTodo(inputData))}
            >
              {" "}
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
