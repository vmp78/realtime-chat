import { auth } from "../../lib/firebase"
import "./detail.css"

const Detail = () => {
    return (
      <div className='detail'>
        <div className="user">
          <img src="./avatar.png" alt=""/>
          <h2>Vu Phuoc</h2>
          <p>hiiihiiiii</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt=""/>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & help</span>
              <img src="./arrowUp.png" alt=""/>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Share photos</span>
              <img src="./arrowDown.png" alt=""/>
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/03/hinh-nen-desktop.jpg"
                alt=""/>
                <span>photo_2021_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Share Files</span>
              <img src="./arrowUp.png" alt=""/>
            </div>
          </div>
          <button>Block User</button>
          <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
        </div>
        </div>
    )
  }
  
  export default Detail