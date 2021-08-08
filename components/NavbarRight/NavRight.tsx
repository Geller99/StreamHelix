
import React from "react";
import Alerts from './../../utilities/Alerts';
import MoreOptions from './../../utilities/MoreOptions';
import UserIcon from './../../utilities/UserIcon';

const NavRight: React.FC = () => {
  return (
    <div className='NavRight'>
      <div className='NavRight--FirstPart'> 
       <button> <UserIcon/> </button>
       <button> <Alerts/> </button>
       <button> <MoreOptions/> </button>
      </div>

      <div className='NavRight--SecondPart'></div>
       
    </div>
  )
}

export default NavRight