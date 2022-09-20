import User from "../user/User";
import "./SideBarLeft.scss";
import { FiChevronDown } from "react-icons/fi";
import { WiDirectionUp } from "react-icons/wi";
import { useEffect, useState } from "react";
import dataGr from "./dataGr.json";
export default function SideBarLeft() {
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreGr, setSeeMoreGr] = useState(false);
  function handleCheckSeeMore() {
    setSeeMore(!seeMore);
  }
  useEffect(() => {
    const listSideLeft = document.querySelectorAll(".list-side-bar--left");
    if (seeMore === false) {
      for (var i = 6; i < listSideLeft.length; i++) {
        listSideLeft[i].classList.add("hide");
      }
    } else if (seeMore === true) {
      document.querySelectorAll(".list-side-bar--left").forEach((item) => {
        item.classList.remove("hide");
      });
    }
  }, [seeMore]);

  function handleCheckSeeMoreGr() {
    setSeeMoreGr(!seeMoreGr);
  }
  useEffect(() => {
    const listSideLeftGr = document.querySelectorAll(".list-side-bar--left-gr");
    if (seeMoreGr === false) {
      for (var i = 5; i < listSideLeftGr.length; i++) {
        listSideLeftGr[i].classList.add("hide");
      }
    } else if (seeMoreGr === true) {
      document.querySelectorAll(".list-side-bar--left-gr").forEach((item) => {
        item.classList.remove("hide");
      });
    }
  }, [seeMoreGr]);
  const listRules = [
    "Quyền riêng tư",
    "Điều khoản",
    "Quảng cáo",
    "Lựa chọn quảng cáo",
    "Cookie",
    "Xem thêm",
    "Meta © 2022",
  ];

  return (
    <div className="side-bar-left--main">
      <ul className="side-bar-left--container">
        <li className="list-side-bar--left">
          <User
            className
            avatarUser="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
            nameUser="Dương Mạnh"
          />
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
            alt=""
          />
          Bạn bè
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
            alt=""
          />
          Nhóm
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
            alt=""
          />
          Marketplace
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
            alt=""
          />
          Watch
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png"
            alt=""
          />
          Kỷ niệm
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"
            alt=""
          />
          Chiến dịch gây quỹ
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png"
            alt=""
          />
          Chơi game
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
            alt=""
          />
          Đã lưu
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png"
            alt=""
          />
          Facebook Pay
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png"
            alt=""
          />
          Gần đây nhất
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png"
            alt=""
          />
          Hoạt động quảng cáo gần đây
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png"
            alt=""
          />
          Messenger
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png"
            alt=""
          />
          Messenger nhí
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
            alt=""
          />
          Sự kiện
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png"
            alt=""
          />
          Sức khỏe cảm xúc
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
            alt=""
          />
          Trang
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png"
            alt=""
          />
          Trình quản lí quảng cáo
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png"
            alt=""
          />
          Trung tâm Khoa học Khí hậu
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png"
            alt=""
          />
          Trung tâm quảng cáo
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png"
            alt=""
          />
          Ứng phó khẩn cấp
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png"
            alt=""
          />
          Video chơi game
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GmeV2VDbZTi.png"
            alt=""
          />
          Video trực tiếp
        </li>
        <li className="list-side-bar--left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png"
            alt=""
          />
          Yêu thích
        </li>
        <li className="btn-see--more" onClick={() => handleCheckSeeMore()}>
          {!seeMore ? (
            <>
              <FiChevronDown className="icon-see--more" />
              <p> Xem thêm</p>
            </>
          ) : (
            <>
              <WiDirectionUp className="icon-see--more" />
              <p> Ẩn bớt</p>
            </>
          )}
        </li>
        <li className="Hr"></li>
      </ul>
      <ul className="group-in">
        <div className="group-in--header">
          <h3>Lỗi tắt của bạn</h3>
          <p>Chỉnh sửa</p>
        </div>
        <ul className="side-bar-left--container-gr">
          {dataGr.map((data, index) => (
            <li key={index} className="list-side-bar--left-gr">
              <img src={data.avt_gr} alt="Group anything" />
              {data.name_gr.length >= 40
                ? data.name_gr.slice(0, 40) + "..."
                : data.name_gr}
            </li>
          ))}

          <li
            className="btn-see--more-gr"
            onClick={() => handleCheckSeeMoreGr()}
          >
            {!seeMoreGr ? (
              <>
                <FiChevronDown className="icon-see--more-gr" />
                <p> Xem thêm</p>
              </>
            ) : (
              <>
                <WiDirectionUp className="icon-see--more-gr" />
                <p> Ẩn bớt</p>
              </>
            )}
          </li>
        </ul>
      </ul>
      <li className="rules">{listRules.join(" · ")}</li>
    </div>
  );
}
