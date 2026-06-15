import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";

export default function Home() {
  const tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.length - completed;

  useEffect(() => {
    document.title = "Home | TaskFlow";
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-violet-50 dark:bg-slate-950 transition-colors">

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-16">

          {/* Hero Section */}
          <div className="text-center mb-16">

            <span
              className="
              inline-block
              px-4 py-2
              rounded-full
              text-xs font-medium
              bg-violet-100
              dark:bg-violet-900/20
              text-[#d65db1]
              mb-6
              "
            >
              Productivity Workspace
            </span>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
              text-slate-900
              dark:text-white
              mb-6
              "
            >
              Task
              <span className="text-[#d65db1]">
                Flow
              </span>
            </h1>

            <p
              className="
              max-w-2xl
              mx-auto
              text-violet-600
              dark:text-violet-300
              mb-8
              text-lg
              "
            >
              Plan smarter, stay focused, and manage
              your workflow with a clean and modern
              experience.
            </p>

            <Link
              to="/tasks"
              className="
              inline-flex
              items-center
              px-8 py-4
              rounded-2xl
              bg-[#d65db1]
              hover:bg-[#c44ca0]
              text-white
              font-semibold
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-[#d65db1]/25
              "
            >
              Open Workspace
            </Link>

          </div>

          {/* Statistics */}
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            "
          >

            {/* Total */}
            <div
              className="
              bg-white dark:bg-slate-900
              border border-violet-100 dark:border-violet-900
              rounded-3xl
              p-6
              text-center
              shadow-sm
              hover:shadow-lg
              transition-all duration-300
              "
            >
              <p className="text-violet-600 dark:text-violet-300 mb-2">
                Total Tasks
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-slate-900
                dark:text-white
                "
              >
                {tasks.length}
              </h2>
            </div>

            {/* Completed */}
            <div
              className="
              bg-white dark:bg-slate-900
              border border-violet-100 dark:border-violet-900
              rounded-3xl
              p-6
              text-center
              shadow-sm
              hover:shadow-lg
              transition-all duration-300
              "
            >
              <p className="text-[#d65db1] mb-2">
                Completed
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-[#d65db1]
                "
              >
                {completed}
              </h2>
            </div>

            {/* Pending */}
            <div
              className="
              bg-white dark:bg-slate-900
              border border-violet-100 dark:border-violet-900
              rounded-3xl
              p-6
              text-center
              shadow-sm
              hover:shadow-lg
              transition-all duration-300
              "
            >
              <p className="text-violet-700 dark:text-violet-300 mb-2">
                Pending
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-violet-700
                dark:text-violet-300
                "
              >
                {pending}
              </h2>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}