import "./boxchat.scss";
import User from "../../user/User";
import { BsFillCameraVideoFill, BsPlusCircleFill } from "react-icons/bs";
import { FaAngleDown, FaSmileBeam } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { ImPhone } from "react-icons/im";
import { IoCloseSharp, IoImagesSharp } from "react-icons/io5";
import { MdStickyNote2 } from "react-icons/md";
import { RiFileGifFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { useCallback, useState } from "react";
export default function BoxChat(props) {
  const [word, setWord] = useState("");
  const nameUser = props.id;
  console.log(nameUser)
  const [listMess, setListMess] = useState(() => {
    const storageMess = JSON.parse(localStorage.getItem(`${nameUser}`));
    return storageMess ?? ["Xin chào "+props.nameUser];
  });

  const handleWord = useCallback((value) => {
    setWord(value.charAt(0).toUpperCase() + value.slice(1));
  }, []);

  const handleSend = useCallback(
    (key) => {
      if (key === "Enter" && word) {
        setListMess([...listMess, word]);
        localStorage.setItem(`${nameUser}`, JSON.stringify([...listMess, word]));
        setWord("");
      }
    },
    [listMess, nameUser, word]
  );

  const handleHideIcon = (e) => {
    console.log(123);
    e.target.parentElement.parentElement.children[1].style.display = "none";
    e.target.parentElement.parentElement.children[2].style.display = "none";
    e.target.parentElement.parentElement.children[3].style.display = "none";
    e.target.style.width = "241px";
  };

  const handleShowIcon = (e) => {
    console.log(123);
    e.target.parentElement.parentElement.children[1].style.display = "block";
    e.target.parentElement.parentElement.children[2].style.display = "block";
    e.target.parentElement.parentElement.children[3].style.display = "block";
    e.target.style.width = "145px";
  };
  return (
    <div className="ib-container ">
      <div className="boxchat-header">
        <div className="user-status">
          <User avatarUser={props.avatarUser} status={props.status} />
          <span>
            <p className="name-user">
              {props.nameUser.length > 10
                ? props.nameUser.slice(0, 10) + "..."
                : props.nameUser}
            </p>
            <p className="status">
              {props.status === true
                ? "Đang hoạt động"
                : props.status >= 60
                ? `Hoạt động ${Math.round(props.status / 60)} giờ trước`
                : `Hoạt động ${props.status} phút trước`}
            </p>
          </span>
          <FaAngleDown className="icon-inbox" />
        </div>

        <ul>
          <li className="icon-inbox">
            <ImPhone />
          </li>
          <li className="icon-inbox">
            <BsFillCameraVideoFill />
          </li>
          <li className="icon-inbox">
            <AiOutlineMinus />
          </li>
          <li
            className="icon-inbox"
            onClick={(e) =>
              e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
                "active"
              )
            }
          >
            <IoCloseSharp />
          </li>
        </ul>
      </div>
      <div className="boxchat-container">
        <ul className="list-mess">
          {listMess.map((item, index) => (
            <li className="mess-text" key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <span className="mess-like">
          <User avatarUser={props.avatarUser} />
        </span>
      </div>
      <div className="input-mess">
        <BsPlusCircleFill className="icon-func-input" />
        <IoImagesSharp className="icon-func-input" />
        <MdStickyNote2 className="icon-func-input" />
        <RiFileGifFill className="icon-func-input" />
        <div className="input-ib">
          <input
            onFocus={(e) => handleHideIcon(e)}
            onBlur={(e) => handleShowIcon(e)}
            value={word}
            type="text"
            placeholder="Aa"
            onKeyDown={(e) => handleSend(e.key)}
            onChange={(e) => handleWord(e.target.value)}
          />
          <FaSmileBeam className="icon-emoji" />
        </div>
        <FcLike className="icon-like" />
      </div>
    </div>
  );
}
