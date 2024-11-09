import NavbarLeft from "./navbar-left"
import NavbarRight from "./navbar-right"


function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
        <NavbarLeft />
        <NavbarRight />
    </nav>
  )
}

export default Navbar