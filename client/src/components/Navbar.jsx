export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white text-xl backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-8">
        <h1 className="text-2xl font-bold text-white">
          K Deekshitha
        </h1>

        <ul className="flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}