import Link from "next/link";

function Header() {
  const lists1 = ["About", "Projects", "Experience", "Contact"];
  return (
    <div className="flex bg-red-300 h-11 items-center justify-between">
      <Link href="/work" className="text-2xl">
        LOGO
      </Link>
      <div className="flex gap-20 pr-3">
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
