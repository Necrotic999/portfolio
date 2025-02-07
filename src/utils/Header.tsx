import Link from "next/link";

const Header = () => {
  const links = [
    {
      href: "#hero",
      label: "Home",
    },
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#",
      label: "Projects",
    },
    {
      href: "#",
      label: "Contacts",
    },
  ];
  return (
    <header className="fixed flex justify-around items-center h-[70px] top-0 left-0 w-full z-50 bg-[#111111]/80 backdrop-blur-sm border-b border-red-900/20">
      {links.map(({ href, label }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className="hover:text-red-500 transition-colors relative group"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-500 transition-all group-hover:w-full" />
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
