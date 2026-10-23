import { useEffect } from "react";
import ColourRadio from "./components/ColourRadio/ColourRadio.jsx";

// body[data-task] is used by styles/base.css for this task's page background.
const TASK_ID = "3";

export default function App() {
  useEffect(() => {
    document.body.dataset.task = TASK_ID;
    return () => { delete document.body.dataset.task; };
  }, []);

  return (
    <main className="page">
      <div className="page-head">
        <span className="task-chip">Task 3</span>
        <h1 className="page-title">Radio Colour Circle</h1>
        <p className="page-sub">Pick a radio button and the circle fills with that colour instantly.</p>
      </div>
      <ColourRadio />
    </main>
  );
}
