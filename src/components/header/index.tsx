import Menu from "../menu";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-2xl font-bold">Adrian Campana</div>
      <Menu />
    </header>
  );
}
