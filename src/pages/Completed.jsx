import { useEffect, useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default function Completed() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = "Achievements | TaskFlow";

    const savedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(
      savedTasks.filter((task) => task.completed)
    );
  }, []);

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
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-10">

          {/* Header */}
          <div className="mb-10">

            <span
              className="
              inline-block
              px-4 py-2
              rounded-full
              text-xs font-medium
              bg-violet-100
              dark:bg-violet-900/20
              text-[#d65db1]
              mb-4
              "
            >
              Completed Work
            </span>

            <h1
              className="
              text-4xl md:text-5xl
              font-black
              text-slate-900
              dark:text-white
              mb-3
              "
            >
              Achievements
            </h1>

            <p
              className="
              max-w-xl
              text-violet-600
              dark:text-violet-300
              "
            >
              A collection of all the tasks you've
              successfully completed.
            </p>

          </div>

          {/* Content */}
          {tasks.length === 0 ? (
            <div
              className="
              bg-white
              dark:bg-slate-900
              border
              border-violet-100
              dark:border-violet-900
              rounded-3xl
              p-10
              text-center
              shadow-sm
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
                mb-2
                "
              >
                No Achievements Yet
              </h3>

              <p
                className="
                text-violet-600
                dark:text-violet-300
                "
              >
                Complete a task and it will appear here.
              </p>
            </div>
          ) : (
            <TaskList
              tasks={tasks}
              deleteTask={() => {}}
              toggleTask={() => {}}
            />
          )}
        </div>
      </div>
    </>
  );
}