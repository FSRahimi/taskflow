import { Link } from "react-router-dom";

export default function TaskCard({
  task,
  deleteTask,
  toggleTask,
}) {
  return (
    <div
      className="
      bg-white dark:bg-slate-900
      border border-violet-100 dark:border-violet-900
      rounded-3xl
      p-5
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      {/* Title */}
      <h3
        className="
        text-xl
        font-bold
        text-slate-900
        dark:text-white
        "
      >
        {task.title}
      </h3>

      {/* Description */}
      <p
        className="
        mt-3
        text-violet-600
        dark:text-violet-300
        line-clamp-3
        "
      >
        {task.description || "No description"}
      </p>

      {/* Status andd Priority */}
      <div className="flex flex-wrap items-center gap-2 mt-4">

        <span
          className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${
            task.completed
              ? "bg-[#d65db1]/10 text-[#d65db1]"
              : "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
          }
          `}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>

        <span
          className="
          px-3 py-1
          rounded-full
          text-xs
          font-medium
          bg-violet-100
          dark:bg-violet-900/30
          text-violet-700
          dark:text-violet-300
          "
        >
          {task.priority}
        </span>

      </div>

      {/* Buttons */}
      <div
        className="
        flex flex-wrap
        gap-2
        mt-5
        "
      >
        <button
          onClick={() => toggleTask(task.id)}
          className="
          px-4 py-2
          rounded-xl
          bg-[#d65db1]
          hover:bg-[#c44ca0]
          text-white
          transition-all duration-300
          hover:scale-105
          active:scale-95
          "
        >
          Toggle
        </button>

        <Link
          to={`/tasks/${task.id}`}
          className="
          px-4 py-2
          rounded-xl
          border
          border-violet-300
          dark:border-violet-700
          text-violet-700
          dark:text-violet-300
          hover:bg-violet-50
          dark:hover:bg-violet-900/20
          transition-all duration-300
          "
        >
          Details
        </Link>

        <button
          onClick={() => deleteTask(task.id)}
          className="
          px-4 py-2
          rounded-xl
          text-[#d65db1]
          hover:bg-[#d65db1]/10
          transition-all duration-300
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
}