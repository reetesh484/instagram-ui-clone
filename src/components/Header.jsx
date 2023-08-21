import logo from '../assets/images/logo.png';
import home from '../assets/images/home.png';
import message from '../assets/images/message.png';
import add from '../assets/images/add.png';
import compass from '../assets/images/compass.png';
import heart from '../assets/images/heart.png';
import profile from '../assets/images/profile.jpg';

function Header() {
  return (
    <>
      <header>
        <div className="header-border">
          <div className="container-header">
              <div>
                <img src={logo} className="logo" alt="logo" />
              </div>       

              <div className="bar">
                <input type="text" className="search" placeholder="search"/>
              </div>

              <nav>
                <div className="links">
                  <img src={home} className="home" alt="home" />
                  <img src={message} className="message" alt="message" />
                  <img src={add} className="add" alt="add" />
                  <img src={compass} className="compass" alt="compass" />
                  <img src={heart} className="heart" alt="coração" />
                  <img src={profile} className="profile" alt="profile" />
                </div>
              </nav>
          </div>
        </div>        
      </header>
    </>
  );
}
export default Header;
