import { useState, useRef, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const[open,setOpen]=useState(false);
  const[text,setText]=useState("");

  const endRef= useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoji = e=>{
    setText((prev)=>prev+e.emoji);
    setOpen(false);
  }

    return (
      <div className='chat'>
        <div className="top">
          <div className="user">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
              <span>Vu Phuoc</span>
              <p>hellooooo, what your name</p>
            </div>
          </div>
          <div className="icons">
            <img src="./phone.png" alt=""/>
            <img src="./video.png" alt=""/>
            <img src="./info.png" alt=""/>
          </div>
        </div>
        <div className="center">
          <div className="message">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
              <p>Để ẩn thanh cuộn khi không sử dụng đến, 
                bạn có thể sử dụng CSS để tùy chỉnh thuộc tính 
                overflow và scrollbar của phần tử. Dưới đây là mã 
                CSS đã được cập nhật để ẩn thanh cuộn khi không sử 
                dụng đến:
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
              <p>Để ẩn thanh cuộn khi không sử dụng đến, 
                bạn có thể sử dụng CSS để tùy chỉnh thuộc tính 
                overflow và scrollbar của phần tử. Dưới đây là mã 
                CSS đã được cập nhật để ẩn thanh cuộn khi không sử 
                dụng đến:
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
              <p>Để ẩn thanh cuộn khi không sử dụng đến, 
                bạn có thể sử dụng CSS để tùy chỉnh thuộc tính 
                overflow và scrollbar của phần tử. Dưới đây là mã 
                CSS đã được cập nhật để ẩn thanh cuộn khi không sử 
                dụng đến:
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-windows-desktop-wallpaper-showing-a-green-grassy-area-image_2949017.jpg" alt=""/>
              <p>Để ẩn thanh cuộn khi không sử dụng đến, 
                bạn có thể sử dụng CSS để tùy chỉnh thuộc tính 
                overflow và scrollbar của phần tử. Dưới đây là mã 
                CSS đã được cập nhật để ẩn thanh cuộn khi không sử 
                dụng đến:
              </p>
              <span>1 min ago</span>
            </div>
            <div ref={endRef}></div>
          </div>
        
        </div>
        <div className="bottom">
          <div className="icons">
          <img src="./img.png" alt=""/>
            <img src="./camera.png" alt=""/>
            <img src="./mic.png" alt=""/>
          </div>
          <input type="text" placeholder="Type a mesage..." 
            value={text}
            onChange={e=>setText(e.target.value)}/>
          <div className="emoji">
            <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)}/>
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className="sendButton" >Send</button>
        </div>
        </div>
    )
  }
  
  export default Chat