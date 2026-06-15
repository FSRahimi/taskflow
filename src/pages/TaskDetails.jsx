import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    document.title = "Task Details | TaskFlow";

    const tasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    const foundTask = tasks.find(
      (task) => task.id.toString() === id
    );

    setTask(foundTask);
  }, [id]);

  if (!task) {
    return (
      <>
        <Header />

        <div
          className="
          min-h-screen
          bg-violet-50
          dark:bg-slate-950
          flex
          items-center
          justify-center
          px-6
          "
        >
          <div className="text-center">

            <h2
              className="
              text-4xl
              font-black
              text-[#d65db1]
              mb-3
              "
            >
              Task Not Found
            </h2>

            <p
              className="
              text-violet-600
              dark:text-violet-300
              "
            >
              The task you are looking for does not exist.
            </p>

          </div>
        </div>
      </>
    );
  }

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
        <div className="max-w-3xl mx-auto px-5 md:px-6 py-16">

          <div
            className="
            bg-white
            dark:bg-slate-900
            border
            border-violet-100
            dark:border-violet-900
            rounded-3xl
            p-6 md:p-8
            shadow-sm
            "
          >

            {/* Title */}
            <h1
              className="
              text-3xl md:text-4xl
              font-black
              text-slate-900
              dark:text-white
              mb-6
              "
            >
              {task.title}
            </h1>

            {/* Description */}
            <p
              className="
              text-violet-600
              dark:text-violet-300
              leading-relaxed
              mb-8
              "
            >
              {task.description || "No description provided."}
            </p>

            {/* Info */}
            <div className="space-y-4 mb-10">

              <div className="flex justify-between items-center">
                <span className="text-violet-500">
                  Priority
                </span>

                <span
                  className="
                  font-semibold
                  text-slate-900
                  dark:text-white
                  "
                >
                  {task.priority}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-violet-500">
                  Status
                </span>

                <span
                  className={`font-semibold ${
                    task.completed
                      ? "text-[#d65db1]"
                      : "text-violet-600 dark:text-violet-300"
                  }`}
                >
                  {task.completed
                    ? "Completed"
                    : "In Progress"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-violet-500">
                  Created
                </span>

                <span
                  className="
                  font-semibold
                  text-slate-900
                  dark:text-white
                  "
                >
                  {task.createdAt}
                </span>
              </div>

            </div>

            {/* Button */}
            <Link
              to="/tasks"
              className="
              inline-flex
              items-center
              px-6
              py-3
              rounded-2xl
              bg-[#d65db1]
              hover:bg-[#c44ca0]
              text-white
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-[#d65db1]/25
              "
            >
              Back to Workspace
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}