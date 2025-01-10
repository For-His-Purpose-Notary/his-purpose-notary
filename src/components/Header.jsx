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
    <header className="flex justify-between items-center w-full p-4">
      <h1 className="text-3xl lg:text-5xl text-black">His Purpose Notary</h1>
      <button
        className="lg:hidden text-4xl z-50"
        onClick={toggleNavbar}
        aria-label="Toggle Navigation"
      >
        {isNavOpen ? "✖" : "☰"}
      </button>
      <nav
        className={`absolute p-2 top-0 left-0 w-full h-screen bg-neutral-100 lg:bg-transparent flex flex-col justify-center items-center gap-6 text-xl transition-transform duration-1000 ease-in-out ${
          isNavOpen ? "flex" : "-translate-x-full"
        }  lg:flex lg:flex-row lg:gap-8 lg:translate-x-0 lg:transition-none lg:h-auto`}
        aria-label="Main navigation"
      >
        <ul className="flex flex-col justify-center items-center p-4 gap-10 lg:ml-auto lg:flex-row">
          {navItems.map((items) => (
            <li key={items.id} className="">
              {items.section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
