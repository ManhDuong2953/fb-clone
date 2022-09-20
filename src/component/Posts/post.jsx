import dataPost from "./data.json";
import dataMess from "../ChatBox/boxChat/data.json";
import User from "../user/User";
import Feed from "./Post/feed";
import "./post.scss";
import { GoSmiley } from "react-icons/go";
import { IoIosVideocam } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import BoxChat from "../ChatBox/boxChat/boxChat";
export default function Post() {
  return (
    <>
      <div className="data-chatbox">
        {dataMess.data_mess.map((item, index) => (
          <BoxChat
            id={item.id}
            key={index}
            nameUser={item.name_user}
            avatarUser={item.avt_user}
            status={item.status}
          />
        ))}
      </div>

      <div className="chat-note">
        <i className="new-ib"></i>
      </div>
      <div className="post-main">
        <div className="post-container">
          <ul className="post-short-media">
            <li>
              <img
                className="media"
                src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                alt=""
              />
              <MdAdd className="add-media" />
              <p className="name-user default">Tạo tin</p>
            </li>

            {dataPost.data_short_media.map((item, index) => (
              <li key={index}>
                <img className="media" src={item.url_media} alt="" />
                <img className="avt-user" src={item.url_avt} alt="" />
                <p className="name-user">
                  {item.name_user.length >= 14
                    ? item.name_user.slice(0, 13) + "..."
                    : item.name_user}
                </p>
              </li>
            ))}
          </ul>
          <div className="create-post">
            <div className="post-add">
              <img
                src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                alt=""
              />
              <input type="text" placeholder="Mạnh ơi, bạn đang nghĩ gì thế?" />
            </div>
            <ul>
              <li>
                <IoIosVideocam
                  style={{
                    color: "rgb(243 66 95",
                    fontSize: "23px",
                    margin: "0 10px",
                  }}
                />
                Video trực tiếp
              </li>
              <li>
                <FaImages
                  style={{
                    color: "rgb(69 189 98)",
                    fontSize: "23px",
                    margin: "0 10px",
                  }}
                />
                Ảnh/Video
              </li>
              <li>
                <GoSmiley
                  style={{
                    color: "rgb(247 185 40)",
                    fontSize: "23px",
                    margin: "0 10px",
                  }}
                />
                Cảm xúc/Hoạt động
              </li>
            </ul>
          </div>
          <div className="create-room-call">
            <div className="header-room">
              <span className="icon-create-room"></span>
              <h4>Tạo phòng họp mặt</h4>
            </div>
            <ul>
              {dataMess.data_mess.map((item, index) => (
                <li key={index}>
                  <User avatarUser={item.avt_user} status={item.status} />
                </li>
              ))}
            </ul>
          </div>
          <div className="posts">
            {dataPost.data_feed.map((item, index) => (
              <Feed
                key={index}
                Avt={item.user[0].img_url_avt}
                nameUser={item.user[0].name_user}
                timeUpdate={item.content[0].time}
                caption={item.content[0].title}
                urlImg={item.content[0].url_img}
                urlVideo={item.content[0].url_video}
                status={item.content[0].public}
                hashtag={item.content[0].hashtag}
                likeCount={item.content[0].like_count}
                cmtCount={item.content[0].comment_count}
                shareCount={item.content[0].share_count}
                cmt={item.cmt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
