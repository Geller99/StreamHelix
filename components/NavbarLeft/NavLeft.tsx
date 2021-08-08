import React from "react";
import Settings from "./../../utilities/Settings";
import GetHelp from "./../../utilities/GetHelp";
import DownloadApp from "./../../utilities/DownloadApp";
import ConnectMobile from "./../../utilities/ConnectMobile";
import AddGame from "./../../utilities/AddGame";
import Refresh from "./../../utilities/Refresh";
// import { logoHelix } from './../../pages/_app';
import Image from 'next/image'


const NavLeft = () => {
  return (
    <div className="NavLeft">
      <div className="NavLeft--section1">
        {/* <Image className='NavLeft--Logo' alt='LogoHelix' src={logoHelix} /> */}
        <button>
          <Refresh />
        </button>
        <div className='NavLeft--Barrier'>  </div>
      </div>

      <div className="NavLeft--section2">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <button>
          {" "}
          <AddGame />{" "}
        </button>
      </div>

      <div className="NavLeft--section3">
        <button>
          {" "}
          <ConnectMobile />{" "}
        </button>
        <button>
          {" "}
          <DownloadApp />{" "}
        </button>
        <button>
          {" "}
          <GetHelp />{" "}
        </button>
        <button>
          {" "}
          <Settings />{" "}
        </button>
      </div>
    </div>
  );
};

export default NavLeft;
