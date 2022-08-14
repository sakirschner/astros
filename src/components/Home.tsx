import BubbleBath from "../images/sun-astros-bubble-bath.png";
import ShirtSM from "../images/sun-astros-shirt-sm.jpg";
import ShirtLG from "../images/sun-astros-shirt-lg.jpg";
import AlbumLG from "../images/sun-astros-album-lg.jpg";
import AlbumSM from "../images/sun-astros-album-sm.jpg";
import "bulma/css/bulma.min.css";
import { useScrollHandler } from "../hooks/useScrollHandler";
import { Link } from "react-router-dom";
import { useSongKick } from "../hooks/useSongKick";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

export default function Home() {
  const scroll = useScrollHandler();
  useSongKick("//widget.songkick.com/10226656/widget.js");

  return (
    <div>
      <section className="hero has-background">
        <div className="hero-head">
          <header
            className={`navbar is-transparent is-fixed-top ${
              scroll ? "nav-background" : null
            }`}
          >
            <div className="container">
              <div className="navbar-brand">
                {scroll && (
                  <div className="navbar-item">
                    <h1>SUN ASTROS</h1>
                  </div>
                )}
                <span className="navbar-burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link
                    className="navbar-item"
                    id={`${scroll ? "nav-item-scroll" : "nav-item"}`}
                    to={{ pathname: "/#listen" }}
                  >
                    LISTEN
                  </Link>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link
                    className="navbar-item"
                    id={`${scroll ? "nav-item-scroll" : "nav-item"}`}
                    to={{ pathname: "/#shows" }}
                  >
                    SHOWS
                  </Link>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link
                    className="navbar-item"
                    id={`${scroll ? "nav-item-scroll" : "nav-item"}`}
                    to={{ pathname: "/#merch" }}
                  >
                    MERCH
                  </Link>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className="navbar-item"
                    id={`${scroll ? "nav-item-scroll" : "nav-item"}`}
                    href="#"
                  >
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        <img
          alt="SUN ASTROS BUBBLE BATH"
          className="hero-background"
          src={BubbleBath}
        />
      </section>
      <section id="listen">
        <div>
          <h2>LISTEN</h2>
        </div>
        <div className="bandcamp-container">
          <iframe
            title="SUN ASTROS ALBUM"
            className="bandcamp"
            src="https://bandcamp.com/EmbeddedPlayer/album=1445388436/size=large/bgcol=333333/linkcol=f171a2/package=974899599/tracklist=false/"
            seamless
          >
            <a href="https://sunastros.bandcamp.com/album/sun-astros">
              SUN ASTROS by SUN ASTROS
            </a>
          </iframe>
        </div>
      </section>
      <section id="listen">
        <div>
          <h2>SHOWS</h2>
        </div>
        <div className="songkick-container" id="shows">
          <a
            href="https://www.songkick.com/artists/10226656"
            className="songkick-widget"
            data-theme="dark"
            data-track-button="on"
            data-detect-style="true"
            data-font-color="#f171a2"
            data-background-color="#303030"
            data-locale="en"
          >
            SUN ASTROS SHOWS
          </a>
        </div>
      </section>
      <section>
        <div className="columns is-centered is-2 is-multiline">
          <div className="column is-full">
            <h2>MERCH</h2>
          </div>
          <div className="column is-narrow is-mobile merch">
            <div>
              <InnerImageZoom src={ShirtSM} zoomSrc={ShirtLG} />
              <h3>UNIVERSE T-SHIRT</h3>
            </div>
          </div>
          <div className="column is-narrow is-mobile merch">
            <div>
              <InnerImageZoom src={AlbumSM} zoomSrc={AlbumLG} />
              <h3>SUN ASTROS 12" VINYL RECORD</h3>
            </div>
          </div>
        </div>
      </section>

      <iframe
        title="SUN ASTROS BANDCAMP"
        scrolling="no"
        src="https://bandcamp.com/band_follow_button_deluxe/1584757219"
      ></iframe>
    </div>
  );
}
