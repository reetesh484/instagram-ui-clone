import profile from '../assets/images/profile.jpg';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function Story() {
    const storiesRef = useRef(null)
    const [showleft, setShowleft] = useState(false)
    const [showright, setShowright] = useState(true)
    const [users,setUsers] = useState([])

    async function fetchData() {
        const url = " https://dummyapi.io/data/v1/user?page=1&limit=30";
    
        const config = {
          headers: {
            "app-id": "64e1f25192bb4a53bf0a4dce",
          },
        };
    
        const results = await axios.get(url, config);
        const data = results.data.data;
        setUsers(data);
      }
    
      useEffect(() => {
        fetchData();
      }, []);
  
    const onScroll = () => {
      if (
        storiesRef.current.scrollLeft ===
        storiesRef.current.scrollWidth - storiesRef.current.clientWidth
      ) {
        setShowright(false)
      } else {
        setShowright(true)
      }
      if (storiesRef.current.scrollLeft > 0) {
        setShowleft(true)
      } else {
        setShowleft(false)
      }
    }
  return (
    <>
       <div className="story">
          <div className="story-container" onScroll={onScroll} ref={storiesRef}>  
          <div className="profile-story">
                    <div className="story-border">
                        <img src={profile} className="picture-story" alt="profile" />
                    </div>  
                    <h1>Reetesh</h1>
                </div>  
          {
            users && users.map(user => (
                <div className="profile-story" key={user.id}>
                    <div className="story-border">
                        <img src={user.picture} className="picture-story" alt="profile" />
                    </div>  
                    <h1>{user.firstName}</h1>
                </div>
            ))
          } 
                
                <div className="buttons">
                <button onClick={ ()=>{
                            storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 600
                        }}>
                        <BiChevronLeft className={`button-left ${showleft ? "visible" : "invisible"} `}/>
                    </button>
                    <button onClick={ ()=>{
                            storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 600
                        }}>
                        <BiChevronRight className={`button-right ${showright ? "visible" : "invisible"} `}/>
                    </button>
              </div>
            </div>
        </div>
    </>
  );
}

export default Story; 