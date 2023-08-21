import message from '../assets/images/message.png';
import heart from '../assets/images/heart.png';
import comment from '../assets/images/comments.png';
import save from '../assets/images/save.png';
import points from '../assets/images/points.png';
import emoji from '../assets/images/emoji.png';
import fillImage from '../assets/images/redheart2.png'
import savefill from '../assets/images/savefill2.png'
import { useState, useEffect } from 'react';
import axios from 'axios'

function Feed(props) {

    const [comments,setComments] = useState([])
    const [limit,setLimit] = useState(1)
    const [isLiked,setIsLiked] = useState(false)
    const [isSaved,setIsSaved] = useState(false)
    const [openComments,setOpenComments] = useState(false)


    async function fetchData() {
        const url = `https://dummyapi.io/data/v1/post/${props.id}/comment`;
    
        const config = {
          headers: {
            "app-id": "64e1f25192bb4a53bf0a4dce",
          },
        };
    
        const results = await axios.get(url, config);
        const data = results.data.data;
        setComments(data);
      }

    useEffect(() => {
       fetchData();
    },[])
  return (
    <>
            <div className="picture1">
                <div className="profile-information">
                    <div className="profile-feed">
                        <div>
                            <div className="story-border-feed"><img src={props.profile} className="picture-profile" alt="profile" /></div>    
                            <div className="text-feed">
                                <h1>{props.name}</h1>
                            </div>
                        </div>
                        
                        <div>
                            <img src={points} className="points" alt="profile" />
                        </div>                            
                    </div>                               
                    


                </div>

                <img src={props.feed} className="picture-feed" alt="picture" />
                
                <div className="interaction">  
                    <div>
                     <span onClick={() => setIsLiked(!isLiked)}> {
                        isLiked ? <img src={fillImage} className='heart' alt="heart" /> : <img src={heart} className='heart' alt="heart" />}  
                        </span> 
                        <img src={comment} onClick={() => setOpenComments(!openComments)} className="heart" alt="heart" />
                        <img src={message} className="message" alt="message" />
                    </div>                  
                    <span onClick={() => setIsSaved(!isSaved)}> {
                        isSaved ? <img src={savefill} className='save' alt="save" /> : <img src={save} className='save' alt="save" />}  
                        </span> 
                </div>

                <div className="information-picture">
                    <p><span>{props.likes}</span></p>
                    <p><span>{props.name}</span> {props.title}</p>
                    <p onClick={() => setOpenComments(!openComments)} style={{color:"gray"}}>{comments.length} {comments.length > 1 ? 'Comments' : 'Comment' }</p>
                    {
                        openComments && comments && comments.map(comment => (
                            <p key={comment.id} className="comments"><b>{comment.owner.firstName}</b> {comment.message}</p>
                        ))
                    }
                   
                    <p className="posted">Posted on {props.posted}</p> 
                </div>                

                <div className="public-comments">
                    <img src={emoji} className="emoji" alt="emoji" />
                    <input type="text" className="comments" placeholder="Add a comment..." />
                    <p className="public">Post</p>
                </div>
            </div>
    </>
  );
}

export default Feed;