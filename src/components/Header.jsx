import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = [
    { section: "About", id: 1 },
    { section: "Services", id: 2 },
    { section: "Testimonials", id: 3 },
    { section: "Q&A", id: 4 },
    { section: "Contact", id: 5 },
  ];

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between items-center w-full p-4 bg-black/20  ">
      <h1 className="text-3xl lg:text-5xl">His Purpose Notary</h1>

      <button
        className="lg:hidden text-4xl z-50"
        onClick={toggleNavbar}
        aria-label="Toggle Navigation"
      >
        {isNavOpen ? "✖" : "☰"}
      </button>

      {/* Conditional Rendering for Mobile Menu */}
      {isNavOpen && (
        <nav
          className={`absolute p-2 top-0 left-0 w-full h-screen flex flex-col text-white
            justify-center items-center gap-6 text-xl
         bg-black/95
            transition-transform duration-[800ms] ease-in-out 
            lg:hidden`}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col justify-center items-center p-4 gap-10">
            {navItems.map((items) => (
              <li
                key={items.id}
                onClick={() => setIsNavOpen(false)}
                className="cursor-pointer hover:underline"
              >
                {items.section}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Visible for Large Screens */}
      <nav
        className="hidden lg:flex lg:flex-row lg:gap-8 lg:items-center lg:ml-auto"
        aria-label="Main navigation"
      >
        <ul className="flex flex-row gap-6">
          {navItems.map((items) => (
            <li
              key={items.id}
              className="cursor-pointer hover:underline text-2xl"
            >
              {items.section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
