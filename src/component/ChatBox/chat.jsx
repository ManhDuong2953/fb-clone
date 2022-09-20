import { IoIosMore } from "react-icons/io";
import { IoCreateSharp } from "react-icons/io5";
import { MdZoomOutMap, MdVideoCall } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./chat.scss";
import { useCallback, useEffect } from "react";
import User from "../user/User";
import dataIB from "./boxChat/data.json";

export default function ChatBox() {
  function convert_vi_to_en(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    str = str.replace(/  +/g, " ");
    str = str.split(" ").join("");
    return str;
  }
  const filterData = useCallback((search) => {
    const listUser = document.querySelectorAll(".list-user");
    dataIB.data_mess.forEach((item, index) => {
      if (
        convert_vi_to_en(item.name_user.toLowerCase()).includes(
          convert_vi_to_en(search.toLowerCase())
        )
      ) {
        listUser[index].classList.remove("hide");
      } else {
        listUser[index].classList.add("hide");
      }
    });
  }, []);
  useEffect(() => {
    // hành dộng focus vào inpt search và hành dộng blur
    const inputMessSearch = document.querySelector(".input-controls-mess");
    const overLayMess = document.querySelector(".overlay-mess");
    const ChatSearchMess = document.querySelector(".chat-search-mess");
    const listUserMess = document.querySelectorAll(".list-user");
    const listUserSideBar = document.querySelectorAll(".mess-sidebar");
    const chatBoxMain = document.querySelectorAll(".ib-container");
    const chatBoxMess = document.querySelector(".chatbox-container");
    listUserMess.forEach((item, index) => {
      item.onclick = () => {
        if (document.querySelector(".ib-container.active")) {
          document.querySelector(".ib-container.active").remove("active");
        }
        chatBoxMain[index].classList.add("active");
        chatBoxMess.style.display = "none";
      };
    });
    listUserSideBar.forEach((item, index) => {
      item.onclick = () => {
        if (document.querySelector(".ib-container.active")) {
          document.querySelector(".ib-container.active").remove("active");
        }
        chatBoxMain[index].classList.add("active");
        chatBoxMess.style.display = "none";
      };
    });
    inputMessSearch.addEventListener("click", () => {
      ChatSearchMess.classList.add("active");
      overLayMess.style.display = "block";
      overLayMess.addEventListener("click", () => {
        ChatSearchMess.classList.remove("active");
        overLayMess.style.display = "none";
      });
    });
  },[]);

  function handleStatus(props) {
    if (props === true) {
      return " bây giờ"
    } else if (props === undefined) {
      return <></>;
    } else {
      return (
          props >= 60 ? " "+ Math.round(props / 60) + " giờ " : " "+props + " phút"    
      );
    }
  }
  return (
    <>
      <div className="chatbox-container">
        <div className="chat-func">
          <h2>Chat</h2>
          <ul className="icon-list">
            <li className="icon-func-mess">
              <IoIosMore />
            </li>
            <li className="icon-func-mess">
              <MdZoomOutMap />
            </li>
            <li className="icon-func-mess">
              <MdVideoCall />
            </li>
            <li className="icon-func-mess">
              <IoCreateSharp />
            </li>
          </ul>
        </div>
        <div className="chat-search-mess">
          <div className="overlay-mess"></div>
          <AiOutlineArrowLeft className="icon-alt-logo-mess" />
          <i className="fa-solid fa-magnifying-glass icon-search-mess"></i>
          <input
            type="text"
            onChange={(e) => filterData(e.target.value)}
            placeholder="Tìm kiếm trên Messenger"
            className="input-controls-mess"
          />
        </div>
        <ul className="chat-list">
          {dataIB.data_mess.map((item, index) => (
            <li className="list-user" key={index}>
              <User
                key={index}
                avatarUser={item.avt_user}
                status={item.status}
              />
              <span>
                <p className="name-user">{item.name_user}</p>
                <p className="mess-current">
                  Xin chào {item.name_user} ∙ {handleStatus(item.status)}
                </p>
              </span>
            </li>
          ))}
        </ul>
        <p className="footer-inbox">Xem tất cả trong Messenger</p>
      </div>
    </>
  );
}
