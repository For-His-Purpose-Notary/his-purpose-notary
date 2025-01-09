export default function Header() {
  const navItems = [
    { section: "About", id: 1 },
    { section: "Services", id: 2 },
    { section: "Testimonials", id: 3 },
    { section: "Contact", id: 4 },
  ];
  return (
    <header className="flex justify-between items-center w-full">
      <nav
        className="flex justify-between items-center w-full font-thin mt-4 font-serif p-2"
        aria-label="Main navigation"
      >
        <h1 className="text-5xl flex-1 text-black">His Purpose Notary</h1>

        <ul className="hidden lg:flex gap-8 p-4 text-2xl ml-20">
          {navItems.map((items) => (
            <li key={items.id}>{items.section}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
