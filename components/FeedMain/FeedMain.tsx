
import React from 'react'
import CommentIcon from '../../utilities/CommentIcon';
import CopyLinkIcon from '../../utilities/CopyLinkIcon';
import LikeButton from '../../utilities/LikeButton';
import MoreOptions from '../../utilities/MoreOptions';
import ShareButton from '../../utilities/ShareButton';
import WatchIcon from '../../utilities/WatchIcon';
import EnterButton from './../../utilities/EnterButton';

function FeedMain() {
  return (
    <div className='FeedMain'>

      <div className='FeedMain--LeftPanel'>
        <div>User Info</div>
        <button className='FeedMain--LeftPanel_LikeButton'><LikeButton/></button>
        <button><WatchIcon /> 22</button>
        <button><CommentIcon/>32</button>
      </div>
      
      <div className='FeedMain--RightPanel'>
        <div className='FeedMain-RightPanel_iframe'>
          <iframe className='User--iframe' src="" ></iframe>
        </div>
        <div className='FeedMain-RightPanel_detailBox'>
          <div className='RightPanel_Game'>Game Name</div>
          <span className='RightPanel_Title'>Clip Title</span>
          
          <div className='FeedMain-RightPanel_detailBox-accessories'>
            <div>username</div>
            <button className='angry-btn'><LikeButton /> Like </button>
            <button className='angry-btn'><CopyLinkIcon /> Copy Link </button>
            <button className='angry-btn'><ShareButton /> Share </button>
            <MoreOptions/>
          </div>
        </div>
        <div className='FeedMain-RightPanel_CommentBox'>
          <input className='FeedMain-RightPanel_CommentBox-input' type='text' /> <button className='Enter-button'> <EnterButton/> </button>
        </div>
      </div>
    </div>
  )
}

export default FeedMain

