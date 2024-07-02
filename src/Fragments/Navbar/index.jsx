import Logo from "../../Elements/Logo";
import Menu from "../../Elements/Menu";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-between w-full h-16 items-center border-b-2">
      <Logo />
      <Menu />
    </nav>
  );
}
