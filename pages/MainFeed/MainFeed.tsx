import React from 'react';
import NavLeft from './../../components/NavbarLeft/NavLeft';
import NavRight from './../../components/NavbarRight/NavRight';
import NavBarTop from './../../components/NavbarTop/NavBarTop';
import FeedTab from './../../components/FeedTab/FeedTab';
import FeaturedEvents from './../../components/CurrentEvents/FeaturedEvents';
import Usersuggestions from './../../components/UserSuggestions/Usersuggestions';
import SignupBox from './../../components/SignupForm/SignupBox';
import FeedMain from './../../components/FeedMain/FeedMain';


const MainFeed :React.FC = () => {
  return (
    <div className='bg-purpleLocal h-screen w-full MainFeed'>
      
      <div className='MainFeed--TopNav'> <NavBarTop/> </div>
      <div className='MainFeed--Tabs'> <FeedTab/> </div>
      <div className='MainFeed--Users'> <FeaturedEvents/> </div>
      <div className='MainFeed--LeftNav'> <NavLeft/>  </div>
      <div className='MainFeed--RightNav'> <NavRight/> </div>
      <div className='MainFeed--Feed'> <FeedMain/> <FeedMain/> <FeedMain/> <FeedMain/> </div>
      <div className='MainFeed--ManageUser'> <SignupBox/> </div>
      <div className='MainFeed--Suggestions'> <Usersuggestions/>  </div>

      
    </div>
  )
}

export default MainFeed
