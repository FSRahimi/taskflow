import { useState, useEffect } from "react";

import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterButtons from "../components/FilterButtons";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Workspace | TaskFlow";

    const saved =
      JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((t) => t.id !== id)
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
            }
          : t
      )
    );
  };

  let filtered = [...tasks];

  if (filter === "Completed") {
    filtered = filtered.filter(
      (t) => t.completed
    );
  }

  if (filter === "Pending") {
    filtered = filtered.filter(
      (t) => !t.completed
    );
  }

  filtered = filtered.filter((t) =>
    t.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div
        className="
        min-h-screen
        bg-violet-50
        dark:bg-slate-950
        transition-colors
        "
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-12">

          {/* Header */}
          <div className="mb-10">

            <h1
              className="
              text-4xl
              md:text-5xl
              font-black
              text-slate-900
              dark:text-white
              mb-2
              "
            >
              Workspace
            </h1>

            <p
              className="
              text-violet-600
              dark:text-violet-300
              "
            >
              Organize your tasks in a clean,
              focused environment.
            </p>

          </div>

          {/* Form */}
          <div className="mb-10">
            <TaskForm addTask={addTask} />
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
              w-full
              px-5
              py-4
              rounded-2xl
              border
              border-violet-200
              dark:border-violet-900
              bg-white
              dark:bg-slate-900
              text-slate-900
              dark:text-white
              placeholder:text-violet-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#d65db1]
              transition
              "
            />
          </div>

          {/* Filters */}
          <FilterButtons
            filter={filter}
            setFilter={setFilter}
          />

          {/* Tasks */}
          <div className="mt-10">
            <TaskList
              tasks={filtered}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          </div>

        </div>
      </div>
    </>
  );
}