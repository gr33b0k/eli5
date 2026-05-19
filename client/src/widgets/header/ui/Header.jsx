import { Logo } from "@/shared/ui";

function Header() {
  return (
    <header className="flex w-full justify-between rounded-4xl px-10 py-5">
      <Logo />

      <button className="btn-primary">Get started</button>
    </header>
  );
}

export default Header;
