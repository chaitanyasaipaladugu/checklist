import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/checkslice";

export default function ChecklistForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addItem(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checklist-form">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        value={text}
        className="form-input"
      />
      <button type="submit" className="btn btn-add">
        Add
      </button>
    </form>
  );
}
