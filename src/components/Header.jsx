import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = [
    { section: "About", id: 1 },
    { section: "Services", id: 2 },
    { section: "Testimonials", id: 3 },
    { section: "Contact", id: 4 },
  ];

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between items-center w-full p-2">
      <h1 className="text-3xl lg:text-5xl text-black">His Purpose Notary</h1>
      <button
        className="lg:hidden text-4xl"
        onClick={toggleNavbar}
        aria-label="Toggle Navigation"
      >
        ☰
      </button>
      <nav
        className={`flex-col lg:flex-row justify-between items-center w-full font-thin mt-4 p-2
          ${
            isNavOpen ? "flex bg-gray-300 max-w-xs h-40 md:max-w-lg " : "hidden"
          } lg:flex  `}
        aria-label="Main navigation"
      >
        <ul className="lg:flex  gap-8 p-4 text-2xl ml-20">
          {navItems.map((items) => (
            <li key={items.id}>{items.section}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
