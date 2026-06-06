import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:py-8">
        <p className="text-sm">© {year} K Deekshitha. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <p className="hidden text-sm sm:block">Built with React &amp; Tailwind CSS</p>
           
        </div>
      </div>
    </footer>
  );
}