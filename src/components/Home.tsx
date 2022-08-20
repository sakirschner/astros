import BubbleBath from "../images/sun-astros-bubble-bath.png";
import ShirtSM from "../images/sun-astros-shirt-sm.jpg";
import ShirtLG from "../images/sun-astros-shirt-lg.jpg";
import AlbumLG from "../images/sun-astros-album-lg.jpg";
import AlbumSM from "../images/sun-astros-album-sm.jpg";
import "bulma/css/bulma.min.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useSongKick } from "../hooks/useSongKick";
import { useMediaQuery } from "usehooks-ts";
import { useScrollHandler } from "../hooks/useScrollHandler";
import NavBar from "./NavBar";
import InnerImageZoom from "react-inner-image-zoom";
import Form from "./Form";

export default function Home() {
  useSongKick("//widget.songkick.com/10226656/widget.js");
  const scroll = useScrollHandler();
  const isSmall = useMediaQuery("(max-width: 1023px)");

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <html className="has-navbar-fixed-top">
      <div className="hero has-background">
        <NavBar />
        <img
          alt="SUN ASTROS BUBBLE BATH"
          className={`hero-background ${isSmall ? "hero-margin" : null}`}
          src={BubbleBath}
        />
      </div>
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
            <InnerImageZoom src={ShirtSM} zoomSrc={ShirtLG} />
            <h3>UNIVERSE T-SHIRT</h3>
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a
              href="https://sunastros.bandcamp.com/merch/sun-astros-universe-tshirt"
              target="_blank"
            >
              <button className="button btn is-danger is-light">BUY</button>
            </a>
          </div>
          <div className="column is-narrow is-mobile merch">
            <InnerImageZoom src={AlbumSM} zoomSrc={AlbumLG} />
            <h3>SUN ASTRO 12" VINYL RECORD</h3>
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a
              href="https://sunastros.bandcamp.com/album/sun-astros"
              target="_blank"
            >
              <button className="button btn is-danger is-light">
                PRE-ORDER
              </button>
            </a>
          </div>
        </div>
      </section>
      <section id="contact">
        <div>
          <h2>CONTACT</h2>
        </div>
        <Form />
      </section>
      <section>
        <iframe
          title="SUN ASTROS BANDCAMP"
          scrolling="no"
          src="https://bandcamp.com/band_follow_button_deluxe/1584757219"
        ></iframe>
      </section>

      {scroll && (
        <button id="top" onClick={scrollToTop}>
          TOP
        </button>
      )}
    </html>
  );
}
