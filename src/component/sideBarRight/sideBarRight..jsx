import "./SideBarRight.scss";
import dataMess from "./data.json";
import User from "../user/User";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMoreHoriz, MdVideoCall } from "react-icons/md";

export default function SideBarRight() {
  const [isShow, setShow] = useState(false);
  const [listBr, setListBr] = useState();
  useEffect(() => {
    const listUser = document.querySelector(".list-user-btd");
    setListBr(listUser);
  }, []);

  function handleCheckHover(isCheck) {
    setShow(isCheck);
    if (!isShow) {
      listBr.style.display = "block";
    } else {
      listBr.style.display = "none";
    }
  }
  function handleBirth() {
    if (dataMess["birthday"].length === 1) {
      return <b>{" " + dataMess["birthday"][0]["name-user"]}</b>;
    } else if (dataMess["birthday"].length === 2) {
      return (
        <>
          <b>{" " + dataMess["birthday"][0]["name-user"] + " "}</b>và
          <b>{" " + dataMess["birthday"][1]["name-user"]}</b>
        </>
      );
    } else if (dataMess["birthday"].length > 2) {
      return (
        <>
          <b>{" " + dataMess["birthday"][0]["name-user"] + " "}</b> và
          <b>{" " + dataMess["birthday"][1]["name-user"] + " "}</b> và
          <b
            className="user-brd-hide"
            onMouseEnter={() => handleCheckHover(true)}
            onMouseLeave={() => handleCheckHover(false)}
          >
            {" " + (dataMess.birthday.length - 2) + " "}người khác
            <ul className="list-user-btd">
              {dataMess.birthday.map((item, index) => {
                return index > 1 ? (
                  <div key={index}>
                    <li >{dataMess.birthday[index]["name-user"]}</li>
                  </div>
                ) : (
                  <></>
                );
              })}
            </ul>
          </b>
        </>
      );
    }
  }
  return (
    <>
      <div className="side-bar-right--main">
        <ul className="advertisment">
          <h1>Được tài trợ</h1>
          {dataMess.advertisment.map((data, index) => (
            <a key={index} href={data.link_ad}>
              <li className="list-ad" key={index}>
                <img src={data.img_ad} alt="" />
                <div className="des-ad">
                  <h4>{data.title_ad}</h4>
                  <p>{data.dsp_link}</p>
                </div>
              </li>
            </a>
          ))}
        </ul>

        <ul className="birthday-fr">
          <h1>Sinh nhật</h1>
          <div className="birth-main">
            <span></span>
            <p>
              Hôm nay là sinh nhật của
              {handleBirth()}
            </p>
          </div>
        </ul>

        <ul className="mess-main">
          <div className="mess-header">
            <h1>Người liên hệ</h1>
            <ul>
              <li>
                <MdVideoCall className="icon-mess-sub" />
              </li>
              <li>
                <AiOutlineSearch className="icon-mess-sub" />
              </li>
              <li>
                <MdMoreHoriz className="icon-mess-sub" />
              </li>
              <li></li>
            </ul>
          </div>
          <ul className="mess-container">
            {dataMess.data_mess.map((item, index) => (
              <li className="mess-sidebar" key={index}>
                <User
                  key={index}
                  avatarUser={item.avt_user}
                  nameUser={item.name_user}
                  status={item.status}
                />
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
}
