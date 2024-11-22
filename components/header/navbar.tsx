import NavbarLeft from "./navbar-left"
import NavbarRight from "./navbar-right"


function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 backdrop-blur-sm z-50">
        <NavbarLeft />
        <NavbarRight />
    </nav>
  )
}

export default Navbar