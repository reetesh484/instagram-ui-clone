import profile from '../assets/images/profile.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Profile() {

    const [users,setUsers] = useState([])
    const [limit,setLimit] = useState(5)

    async function fetchData() {
        const url = `https://dummyapi.io/data/v1/user?page=2&limit=${limit}`;
    
        const config = {
          headers: {
            "app-id": "64e1f25192bb4a53bf0a4dce",
          },
        };
    
        const results = await axios.get(url, config);
        const data = results.data.data;
        setUsers(data);
        console.log("users:",data);
      }
    
      useEffect(() => {
        fetchData();
      }, [limit]);
  
  return (
    <>
      <div className="information">
            <div className="container-information">
                <div className="switch-profile">
                    <div className="profile-information">
                        <div>
                            <img src={profile} className="picture-information" alt="profile" />
                            <div className="text-profile">
                                <h1>Reetesh Tiwari</h1>
                            </div>
                        </div>
                        
                        <div>
                            <p className="switch">Switch</p>
                        </div>                            
                    </div>                          
                </div>

                <div className="suggested">
                    <div className="suggested-text">
                            <h1>Suggested for you</h1>
                            <p style={{fontSize:"12px",fontWeight:"bold"}} onClick={() => setLimit(20)}>See all</p>
                    </div>

                    {
                        users && users.map(user => (
                            <div className="suggested-container" key={user.id}>
                            <div className="profile-suggested">
                                <div>
                                    <img src={user.picture} className="picture-suggested" alt="profile" />
                                    <div className="text-profile2">
                                        <h1>{user.firstName} {user.lastName}</h1>
                                    </div>
                                </div>
                                
                                <div>
                                    <p className="follow">Follow</p>
                                </div>                            
                            </div>                        
                        </div>
                        ))
                    }
                </div>

                <div className="footer">
                    <div className="footer-link">
                        <a href="https://about.instagram.com/">About</a>
                        <a href="https://help.instagram.com/">Help</a>
                        <a href="https://about.instagram.com/blog">Press</a>
                        <a href="https://developers.facebook.com/docs/instagram">API</a>
                        <a href="https://about.instagram.com/about-us/careers">Careers</a>
                        <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0">Privacy</a>
                        <a href="https://help.instagram.com/581066165581870">Terms</a>
                        <a href="https://www.instagram.com/explore/locations/">Location</a>
                        <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
                    </div>             

                    <p>© 2023 INSTAGRAM FROM META</p>
                </div>
            </div>
      </div>
    </>
  );
}

export default Profile;