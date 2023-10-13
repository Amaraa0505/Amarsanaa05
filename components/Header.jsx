import Link from "next/link";

function Header() {
  const lists1 = ["About", "Work", "Experience", "Contact"];
  return (
    <div className="flex h-11 items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        Home
      </Link>
      <div className="flex gap-20 pr-3 font-bold">
        {lists1.map((el) => (
          <Link href={"/" + el.toLowerCase()} className="text-2xl">
            {el}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Header;
