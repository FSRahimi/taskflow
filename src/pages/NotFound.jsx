import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="
      min-h-screen
      bg-violet-50
      dark:bg-slate-950
      flex
      items-center
      justify-center
      px-6
      transition-colors
      "
    >
      <div className="text-center max-w-lg">

        <h1
          className="
          text-7xl
          md:text-9xl
          font-black
          text-[#d65db1]
          mb-4
          "
        >
          404
        </h1>

        <h2
          className="
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
          dark:text-white
          mb-3
          "
        >
          Page Not Found
        </h2>

        <p
          className="
          text-violet-600
          dark:text-violet-300
          leading-relaxed
          mb-8
          "
        >
          The page you are looking for doesn't exist
          or has been moved.
        </p>

        <Link
          to="/"
          className="
          inline-flex
          items-center
          justify-center
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
          Back to Home
        </Link>

      </div>
    </div>
  );
}