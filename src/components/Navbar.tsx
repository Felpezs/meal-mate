import Avatar from "./Avatar";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="left-0 top-0 fixed flex min-h-12 w-full items-center justify-between border-b-2 border-b-accent-500 bg-surface-light px-4 py-2 dark:bg-surface-dark">
      <Logo />
      <Avatar />
    </nav>
  );
};

export default Navbar;
