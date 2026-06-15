import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  deleteTask,
  toggleTask,
}) {
  if (tasks.length === 0) {
    return (
      <div
        className="
        bg-white dark:bg-slate-900
        border border-violet-100 dark:border-violet-900
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
          text-slate-900 dark:text-white
          mb-2
          "
        >
          No Tasks Yet
        </h3>

        <p
          className="
          text-violet-600
          dark:text-violet-300
          "
        >
          Create your first task and start organizing your workflow.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
      mt-6
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-3
      gap-6
      "
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}