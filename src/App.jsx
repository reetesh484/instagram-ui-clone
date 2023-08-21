import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Story from "./components/Story";
import Profile from "./components/profile";
import Feed from "./components/Feed";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [limit,setLimit] = useState(20)

  async function fetchData() {
    console.log("fetching data")
    const url = `https://dummyapi.io/data/v1/post?page=1&limit=${limit}`;

    const config = {
      headers: {
        "app-id": "64e1f25192bb4a53bf0a4dce",
      },
    };

    try{const results = await axios.get(url, config);
    const data = results.data.data;
    setPosts(data);
    console.log(data);
  }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, [limit]);

  const loadMore = () => {
    console.log("called")
    setLimit(limit => limit+10)
  }
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Story />
          <div className="feed">{posts &&
            posts.map((post) => {
              return (
                <Feed
                  key={post.id}
                  id={post.id}
                  profile={post.owner.picture}
                  name={post.owner.firstName}
                  feed={post.image}
                  likes={`${post.likes} likes`}
                  title={post.text}
                  comments="Ver todos os 22 comentários"
                  posted={post.publishDate.split("T")[0]}
                />
              );
            })} 
            <p onClick={loadMore} style={{fontWeight:"bold"}}>Load More...</p>
            </div>
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
