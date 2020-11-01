import { Nav, NavLink, NavIcons, Bars } from './styles/NavbarElements';

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcons>
          <p>Menu</p>
          <Bars />
        </NavIcons>
      </Nav>
    </>
  );
}

export default Navbar;
