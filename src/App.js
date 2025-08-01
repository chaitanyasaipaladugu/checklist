import ChecklistForm from "./components/ChecklistForm";
import ChecklistItem from "./components/ChecklistItem";
import ChecklistFilter from "./components/ChecklistFilter";
import { useSelector } from "react-redux";

export default function App() {
  const { items, filter } = useSelector((state) => state.checklist);

  const filteredItems = items.filter((item) => {
    if (filter === "completed") return item.done;
    if (filter === "active") return !item.done;
    return true;
  });

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">Checklist App</h1>
      </div>
      <ChecklistForm />
      <ChecklistFilter />
      <div className="items-container">
        {filteredItems.map((item) => (
          <ChecklistItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
