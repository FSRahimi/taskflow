export default function FilterButtons({ filter, setFilter }) {
  const base = `
    px-4 sm:px-5
    py-2.5
    rounded-xl
    font-medium
    border
    transition-all
    duration-300
    active:scale-95
    hover:-translate-y-0.5
  `;

  return (
    <div className="flex flex-wrap gap-3 mt-6">

      <button
        onClick={() => setFilter("All")}
        className={`${base} ${
          filter === "All"
            ? "bg-[#d65db1] text-white border-[#d65db1] shadow-lg shadow-[#d65db1]/20"
            : "bg-white dark:bg-slate-900 text-[#5b21b6] dark:text-[#d65db1] border-[#e9d5ff] dark:border-slate-700 hover:border-[#d65db1] hover:shadow-md"
        }`}
      >
        All Tasks
      </button>

      <button
        onClick={() => setFilter("Completed")}
        className={`${base} ${
          filter === "Completed"
            ? "bg-[#d65db1] text-white border-[#d65db1] shadow-lg shadow-[#d65db1]/20"
            : "bg-white dark:bg-slate-900 text-[#5b21b6] dark:text-[#d65db1] border-[#e9d5ff] dark:border-slate-700 hover:border-[#d65db1] hover:shadow-md"
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("Pending")}
        className={`${base} ${
          filter === "Pending"
            ? "bg-[#d65db1] text-white border-[#d65db1] shadow-lg shadow-[#d65db1]/20"
            : "bg-white dark:bg-slate-900 text-[#5b21b6] dark:text-[#d65db1] border-[#e9d5ff] dark:border-slate-700 hover:border-[#d65db1] hover:shadow-md"
        }`}
      >
        Pending
      </button>

    </div>
  );
}