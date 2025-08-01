import React from "react";
import { useDispatch } from "react-redux";
import { toggleItem } from "../redux/checkslice";

export default function ChecklistItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="checklist-item">
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={item.done}
          onChange={() => dispatch(toggleItem(item.id))}
        />
      </div>
      <span className={`item-text ${item.done ? "completed" : ""}`}>
        {item.text}
      </span>
      <div
        className={`priority-indicator priority-${item.priority || "medium"}`}
      ></div>
    </div>
  );
}
