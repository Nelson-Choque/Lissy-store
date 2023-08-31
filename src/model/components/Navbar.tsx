import { useRef } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2"; // Importa el icono HiBars3BottomLeft si estás usando iconos de React

export default function Navbar() {
  const refNav = useRef<HTMLDivElement>(null);
  const refMenu = useRef<HTMLUListElement>(null);
  const menuMobileActive = () => {
    const $nav = refNav.current;
    const $menu = refMenu.current;

    if ($nav && $menu) {
      $nav.classList.toggle("nav--active");
      $menu.classList.toggle("navbar__menu--active");

      document.body.style.overflow = "visible";

      if ($menu.classList.contains("navbar__menu--active")) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  return (
    <>
      <nav ref={refNav} className="nav">
        <div className="container">
          <div className="navbar">
            <i className="navbar__icon">
              <HiBars3BottomLeft className="icon" onClick={menuMobileActive} />
            </i>

            <div className="navbar__logo text-center mx-auto">Restaurant</div>

            <ul ref={refMenu} className="navbar__menu ">
              <li className="navbar__menu__item navbar__menu__item--active">
                Inicio
              </li>
              <li className="navbar__menu__item ">Productos</li>
              <li className="navbar__menu__item ">Nuestra tienda</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
