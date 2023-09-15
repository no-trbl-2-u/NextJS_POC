import Link from "next/link";

function NavBar() {
  return (
    <div className="layout-navbar">
      <Link href={'/'}>Home</Link>
      <Link href={'/users'}>Users</Link>
    </div>
  )
}

export default NavBar;