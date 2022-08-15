import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useScrollHandler } from "../hooks/useScrollHandler";
import { useMediaQuery } from "usehooks-ts";

export default function NavBar() {
  const scroll = useScrollHandler();
  const isSmall = useMediaQuery("(max-width: 1023px)");

  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  return (
    <nav
      className={`navbar is-transparent is-fixed-top ${
        scroll && !isSmall ? "nav-background" : null
      } ${isSmall ? "nav-background-mobile" : null}`}
    >
      <div className="container">
        <div className="navbar-brand">
          {scroll || isSmall ? (
            <div className="navbar-item">
              <h1>SUN ASTROS</h1>
            </div>
          ) : null}

          <span
            className={`navbar-burger ${burgerOpen ? "is-active" : null}`}
            data-target="navbarMenuHeroC"
            onClick={() => {
              setBurgerOpen(!burgerOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroC"
          className={`navbar-menu ${burgerOpen ? "is-active" : null} ${
            isSmall ? "nav-menu-mobile" : null
          }`}
        >
          <div className="navbar-end">
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              className="navbar-item is-transparent"
              id={`${scroll || isSmall ? "nav-item-scroll" : "nav-item"}`}
              to={{ pathname: "/#listen" }}
              onClick={() => {
                if (burgerOpen) {
                  setBurgerOpen(false);
                }
              }}
            >
              LISTEN
            </Link>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              className="navbar-item"
              id={`${scroll || isSmall ? "nav-item-scroll" : "nav-item"}`}
              to={{ pathname: "/#shows" }}
              onClick={() => {
                if (burgerOpen) {
                  setBurgerOpen(false);
                }
              }}
            >
              SHOWS
            </Link>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              className="navbar-item"
              id={`${scroll || isSmall ? "nav-item-scroll" : "nav-item"}`}
              to={{ pathname: "/#merch" }}
              onClick={() => {
                if (burgerOpen) {
                  setBurgerOpen(false);
                }
              }}
            >
              MERCH
            </Link>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="navbar-item"
              id={`${scroll || isSmall ? "nav-item-scroll" : "nav-item"}`}
              href="#"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
