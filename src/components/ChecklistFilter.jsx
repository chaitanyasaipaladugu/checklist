import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearCompleted } from "../redux/checkslice";

export default function ChecklistFilter() {
  const filter = useSelector((state) => state.checklist.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <button
        className={`filter-btn ${filter === "all" ? "active" : ""}`}
        onClick={() => dispatch(setFilter("all"))}
      >
        All
      </button>
      <button
        className={`filter-btn ${filter === "active" ? "active" : ""}`}
        onClick={() => dispatch(setFilter("active"))}
      >
        Active
      </button>
      <button
        className={`filter-btn ${filter === "completed" ? "active" : ""}`}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Completed
      </button>
      <button className="btn" onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </button>
    </div>
  );
}
