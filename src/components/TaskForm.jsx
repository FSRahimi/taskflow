import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    });

    setTitle("");
    setDescription("");
    setPriority("Low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      bg-white dark:bg-slate-900
      border border-violet-100 dark:border-violet-900
      rounded-3xl
      p-5 md:p-7
      shadow-sm
      transition-all duration-300
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        text-slate-900 dark:text-white
        mb-6
        "
      >
        Create New Task
      </h2>

      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
        w-full
        mb-4
        px-4 py-3
        rounded-xl
        border border-violet-200 dark:border-violet-800
        bg-white dark:bg-slate-950
        text-slate-900 dark:text-white
        placeholder:text-violet-400
        focus:outline-none
        focus:ring-2
        focus:ring-[#d65db1]
        transition-all
        "
      />

      <textarea
        rows="4"
        placeholder="Task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="
        w-full
        mb-4
        px-4 py-3
        rounded-xl
        border border-violet-200 dark:border-violet-800
        bg-white dark:bg-slate-950
        text-slate-900 dark:text-white
        placeholder:text-violet-400
        resize-none
        focus:outline-none
        focus:ring-2
        focus:ring-[#d65db1]
        transition-all
        "
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="
        w-full
        mb-5
        px-4 py-3
        rounded-xl
        border border-violet-200 dark:border-violet-800
        bg-white dark:bg-slate-950
        text-slate-900 dark:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-[#d65db1]
        transition-all
        "
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        type="submit"
        className="
        w-full
        py-3
        rounded-xl
        bg-[#d65db1]
        hover:bg-[#c44ca0]
        text-white
        font-semibold
        transition-all duration-300
        hover:shadow-lg
        hover:shadow-[#d65db1]/25
        hover:-translate-y-0.5
        active:scale-[0.98]
        "
      >
        Create Task
      </button>
    </form>
  );
}