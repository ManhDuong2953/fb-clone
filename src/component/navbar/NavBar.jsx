import React, { useEffect, useState } from "react";
import User from "../user/User";
import ChatBox from "../ChatBox/chat";
import "./NavBar.scss";
import {
  AiFillHome,
  AiOutlineShop,
  AiOutlineArrowLeft,
  AiOutlineClose,
} from "react-icons/ai";

import { IoIosPeople } from "react-icons/io";
import { RiGamepadLine } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { BsMessenger, BsBellFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar() {
  const [word, setWord] = useState(); //khởi tạo giá trị init cho từ nhập vào
  const [list, setList] = useState([
    "Dương Mạnh",
    "Vinh Trần",
    "Top Florentino",
    "F8-Học lập trình để đi làm",
    "ReactJS Việt Nam",
    "VSBG",
    "Cristiano Ronaldo",
    "Chính Phủ Việt Nam",
    "HUMG Confession",
  ]);

  const [listShort, setListShort] = useState([]); //khởi tạo giá trị init cho list rút gọn

  function handleHistory(e) {
    //hàm set từ ngữ nhập vào input search
    setWord(e);
  }

  useEffect(() => {
    // hành dộng focus vào inpt search và hành dộng blur
    const LeftEle = document.querySelector(".left");
    const iconMiddle = document.querySelectorAll(".list-item");
    iconMiddle.forEach((element) => {
      element.addEventListener("click", () => {
        document.querySelector(".list-item.active").classList.remove("active");
        element.classList.add("active");
      });
    });
    //hành động click icon middle
    const inputLeft = document.querySelector(".input-controls");
    const overLay = document.querySelector(".overlay");
    inputLeft.addEventListener("click", () => {
      LeftEle.classList.add("active");
      overLay.style.display = "block";
      overLay.addEventListener("click", () => {
        LeftEle.classList.remove("active");
        overLay.style.display = "none";
      });
    });
    // hành động lick icon right và show box
    const iconRight = document.querySelectorAll(".list-func");
    const iconMess = document.querySelectorAll(".list-func.chat-box");
    iconRight.forEach((e) => {
      e.addEventListener("click", () => {
        if (e === iconMess[0]) {
          iconMess[0].children[1].style.display = "block";
          // iconMess[0].classList.remove("active")
          overLay.style.display = "block";
          overLay.addEventListener("click", () => {
            overLay.style.display = "none";
            iconMess[0].children[1].style.display = "none";
            document
              .querySelector(".list-func.chat-box.active")
              .classList.remove("active");
          });
        }
        if (document.querySelector(".list-func.active")) {
          document
            .querySelector(".list-func.active")
            .classList.remove("active");
        }
        e.classList.add("active");
      });
    });
  }, []);
  function handleList(e) {
    //hàm set hành động khi nhấn Enter

    if (e === "Enter" && word) {
      setList((list) => {
        const Lists = [...list, word];
        localStorage.setItem("history", JSON.stringify(Lists));
        return Lists;
      });
      setWord("");
    }
  }

  useEffect(() => {
    //sử lí lấy 8 phần tử cuối của mảng
    var listCur = [];
    for (var i = 0; i < 8; i++) {
      listCur.push(list[list.length - listCur.length - 1]);
    }
    setListShort(listCur);
  }, [list]);

  const handleDelete = (idIndex) => {
    console.log(idIndex);
    //hàm xóa phần tử đã lắng nge sự kiện onlick, logic: lọc và chỉ trả ề các phần tử có index khác index đã click
    setListShort(() => {
      const newJob = listShort.filter((item, index) => index !== idIndex);
      localStorage.setItem("history", JSON.stringify(newJob));
      return newJob;
    });
  };

  return (
    <>
      <div className="nav-container">
        <div className="left">
          <AiOutlineArrowLeft className="icon-alt-logo" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
            alt=""
            className="logo"
          />
          <div className="search">
            <i className="fa-solid fa-magnifying-glass icon-search"></i>

            <input
              value={word}
              type="text"
              onChange={(e) => handleHistory(e.target.value)}
              onKeyDown={(e) => handleList(e.key)}
              placeholder="Tìm kiếm trên Facebook"
              className="input-controls"
            />

            <ul className="history-search">
              {listShort.length > 0 ? (
                <div className="box-history">
                  <div className="title-history">
                    <p>Tìm kiếm gần nhất</p>
                    <p>Chỉnh sửa</p>
                  </div>
                  {listShort.map((listItem, indexkey) => (
                    <div key={indexkey}>
                      <li key={indexkey} className="list-history">
                        <div className="keyword-history">
                          <MdOutlineWatchLater className="icon-history" />
                          {listItem.length > 14
                            ? listItem.slice(0, 14) + "..."
                            : listItem}
                        </div>
                        <AiOutlineClose
                          className="icon-delete"
                          onClick={() => handleDelete(indexkey)}
                        />
                      </li>
                    </div>
                  ))}
                </div>
              ) : (
                <li className="list-empty">Không có tìm kiếm nào ở đây</li>
              )}
            </ul>
          </div>
        </div>
        <div className="overlay"></div>
        <ul className="middle">
          <Link className="link-to" to="/fb-clone">
            <li title="Trang chủ" className="list-item active">
              <AiFillHome className="icon-home" />
            </li>
          </Link>

          <Link className="link-to" to="/watch">
            <li title="Watch" className="list-item">
              <i
                style={{ fontSize: "22px" }}
                className="fa-solid fa-display icon-home"
                linkto
              ></i>
            </li>
          </Link>
          <Link className="link-to" to="/watch">
            <li title="Market" className="list-item">
              <AiOutlineShop className="icon-home" />
            </li>
          </Link>
          <Link className="link-to" to="/watch">
            <li title="Nhóm" className="list-item">
              <IoIosPeople className="icon-home" />
            </li>
          </Link>
          <Link className="link-to" to="/watch">
            <li title="Trò chơi" className="list-item">
              <RiGamepadLine className="icon-home" />
            </li>
          </Link>
        </ul>
        <ul className="right">
          <li title="Menu" className="list-func">
            <TbGridDots className="icon-func" />
          </li>
          <li title="Messenger" className="list-func chat-box">
            <BsMessenger className="icon-func" />
            <ChatBox />
          </li>
          <li title="Thông báo" className="list-func">
            <BsBellFill className="icon-func" />
          </li>
          <li title="Tài khoản" className="avt-right">
            <User
              nameUser=""
              avatarUser="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
