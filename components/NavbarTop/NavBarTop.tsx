import React from "react";
import UploadIcon from './../../utilities/UploadIcon';

function NavBarTop() {
  return (
    <div className="NavTop">
      <div className="NavTop--sectionOne">
        <input placeholder="Search StreamHelix" className='NavBarTop--SearchBox' />
      </div>

      <div className="NavTop--sectionTwo">
        <a href="" className='NavTop--sectionTwo_linkbtn'>Blog</a>
        <a href="" className='NavTop--sectionTwo_linkbtn'>Games</a>
        <a href="" className='NavTop--sectionTwo_linkbtn'>Careers</a>
        <button className='NavTop--sectionTwo_UploadButton'> <UploadIcon/> Upload</button>
        <button className='NavTop--sectionTwo_DownloadButton'>Download</button>
        
      </div>
    </div>
  );
}

export default NavBarTop;
