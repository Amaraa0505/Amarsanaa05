import Link from "next/link";

function Header() {
  const lists1 = ["About", "Projects", "Experience", "Contact"];
  return (
    <div>
      <Link href="/work" className="text-2xl">
        Work
      </Link>
      <div className="flex gap-20 justify-end">
        {lists1.map((el) => (
          <Link href={"/" + el.toLowerCase()} className="text-2xl">
            {el}
          </Link>
        ))}
      </div>
      <hr></hr>
    </div>
  );
}
export default Header;
