import React, { useState } from "react";

import "./style.css";

import bgimage from "./assets/bg.png";
import navlogo from "./assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EventIcon from "@mui/icons-material/Event";
import bennyPic from "./assets/benny.png";
import vijayPic from "./assets/vijay.png";
import andreaPic from "./assets/andrea.png";
import shilpaPic from "./assets/shilpa.png";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

function App() {
  const [singerTickets, setsingerTickets] = useState([
    false,
    false,
    false,
    false,
  ]);
  return (
    <div className="main">
      <div className="mainbgimage">
        <img src={bgimage} />
        <div className="overlay"></div>
      </div>
      <header className="navbar">
        <div className="navbarlogo">
          <img src={navlogo} />
        </div>
        <div className="navbaroptions">
          <div className="nvopt search">
            <SearchIcon className="icon" />
            <div className="title">Search</div>
          </div>
          <div className="nvopt">Help</div>
          <div className="nvopt">Account</div>
          <LocalMallIcon className="nvopt" />
        </div>
      </header>
      <div className="title1">Cari Cari</div>
      <div className="title2">
        Live from their sofa to yours. Get closer to your favorite artists, and
        never miss out.
      </div>
      <div className="cnt1">
        <div className="circle">
          <div className="icon">
            <FavoriteBorderIcon className="iconmain" />
          </div>
          <div className="value">456</div>
          <div className="label">Likes Everyday</div>
        </div>
        <div className="circle">
          <div className="icon">
            <EventIcon className="iconmain1" />
          </div>
          <div className="value">745</div>
          <div className="label">Online Events</div>
        </div>
        <div className="circle">
          <div className="icon">
            <EventIcon className="iconmain1" />
          </div>
          <div className="value">745</div>
          <div className="label">Online Events</div>
        </div>
        <div className="circle">
          <div className="icon">
            <EventIcon className="iconmain1" />
          </div>
          <div className="value">745</div>
          <div className="label">Online Events</div>
        </div>
      </div>
      <div className="cnt2">
        <div className="topbar">
          <div className="title">
            <span className="titleUL">Up</span>
            <span>coming Shows</span>
          </div>
          <div className="more">View all</div>
        </div>
        <div className="main">
          <div className="cardct">
            <div className="cardbck"></div>
            <div className="cardfront">
              <div className="profilepic">
                <img src={bennyPic} />
              </div>
              <div className="tag">Folk</div>
              <div className="singer">Benny Dayal</div>
              <div className="more">
                <div className="title">More Info &#8594;</div>
                <div className="yu">|</div>
                <div
                  onClick={() =>
                    setsingerTickets([
                      !singerTickets[0],
                      singerTickets[1],
                      singerTickets[2],
                      singerTickets[3],
                    ])
                  }
                  className={`${singerTickets[0] === true ? "icon1" : "icon"}`}
                >
                  <ConfirmationNumberIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="cardct">
            <div className="cardbck"></div>
            <div className="cardfront">
              <div className="profilepic">
                <img src={vijayPic} />
              </div>
              <div className="tag">Bollywood</div>
              <div className="singer">Vijay Yesudas</div>
              <div className="more">
                <div className="title">More Info &#8594;</div>
                <div className="yu">|</div>
                <div
                  onClick={() =>
                    setsingerTickets([
                      !singerTickets[0],
                      singerTickets[1],
                      singerTickets[2],
                      singerTickets[3],
                    ])
                  }
                  className={`${singerTickets[0] === true ? "icon1" : "icon"}`}
                >
                  <ConfirmationNumberIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="cardct">
            <div className="cardbck"></div>
            <div className="cardfront">
              <div className="profilepic">
                <img src={andreaPic} />
              </div>
              <div className="tag">Folk</div>
              <div className="singer">Andrea Jeremiah</div>
              <div className="more">
                <div className="title">More Info &#8594;</div>
                <div className="yu">|</div>
                <div
                  onClick={() =>
                    setsingerTickets([
                      !singerTickets[0],
                      singerTickets[1],
                      singerTickets[2],
                      singerTickets[3],
                    ])
                  }
                  className={`${singerTickets[0] === true ? "icon1" : "icon"}`}
                >
                  <ConfirmationNumberIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="cardct">
            <div className="cardbck"></div>
            <div className="cardfront">
              <div className="profilepic">
                <img src={shilpaPic} />
              </div>
              <div className="tag">Folk</div>
              <div className="singer">Shipla Rao</div>
              <div className="more">
                <div className="title">More Info &#8594;</div>
                <div className="yu">|</div>
                <div
                  onClick={() =>
                    setsingerTickets([
                      !singerTickets[0],
                      singerTickets[1],
                      singerTickets[2],
                      singerTickets[3],
                    ])
                  }
                  className={`${singerTickets[0] === true ? "icon1" : "icon"}`}
                >
                  <ConfirmationNumberIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
