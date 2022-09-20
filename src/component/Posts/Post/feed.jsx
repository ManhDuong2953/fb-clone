import "./feed.scss";
import { MdMoreHoriz, MdPublic } from "react-icons/md";
import { AiFillLock, AiFillCaretDown } from "react-icons/ai";
import User from "../../user/User";
import { useCallback, useEffect, useState } from "react";
export default function Feed(props) {
  const [imgLength, setimgLength] = useState();
  const [checkLike, setCheckLike] = useState(false);
  const [wordCmt, setWordCmt] = useState("");
  const [ListCmt, setListCmt] = useState([]);
  const [likeCountAction, setLikeCount] = useState(props.likeCount);
  useEffect(() => {
    const imgLength = document.querySelector(".feed-media").offsetWidth;
    setimgLength(imgLength);
  }, []);
  const handleLike = useCallback(
    (e) => {
      setCheckLike(!checkLike);
      e.target.classList.toggle("active");
      if (checkLike) {
        setLikeCount(likeCountAction + 1);
      } else {
        setLikeCount(likeCountAction - 1);
      }
    },
    [checkLike, likeCountAction]
  );

  const handlecmt = (value) => {
    setWordCmt(value.charAt(0).toUpperCase() + value.slice(1));
  };

  const handlesendCmt = useCallback(
    (key) => {
      if (key === "Enter" && wordCmt) {
        setListCmt((ListCmt) => [...ListCmt, wordCmt]);
        setWordCmt("");
      }
    },
    [wordCmt]
  );

  useEffect(() => {
    const ListCmt = document.querySelectorAll(".cmt-handle");
    const cmtAction = document.querySelectorAll(".action-container.cmt");
    const cmtCount = document.querySelectorAll(".cmt_count");

    cmtAction.forEach((item, index) => {
      item.addEventListener("click", () => {
        ListCmt[index].classList.add("active");
      });
    });
    cmtCount.forEach((item, index) => {
      item.addEventListener("click", () => {
        ListCmt[index].classList.add("active");
      });
    });
  });

  return (
    <>
      <div className="feed-main">
        <div className="feed-container">
          <div className="feed-header">
            <div className="user-post">
              <img src={props.Avt} alt="" />
              <span>
                <h3>{props.nameUser}</h3>
                <div className="status-feed">
                  <p>
                    {props.timeUpdate / 60 >= 1
                      ? Math.round(props.timeUpdate / 60) + " giờ • "
                      : props.timeUpdate + " phút • "}
                  </p>
                  {props.status ? <MdPublic /> : <AiFillLock />}
                </div>
              </span>
            </div>
            <MdMoreHoriz className="icon-more-func" />
          </div>
          <div className="feed-content">
            {props.caption.map((item, index) => (
              <p key={index} className="para-content">
                {item}
              </p>
            ))}

            {props.hashtag ? (
              <p className="hashtag">
                {props.hashtag.map((item) => item + " ")}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="feed-media">
            {props.urlImg.map((imgAdd, index) => (
              <img key={index}
                style={{
                  width:
                    (imgLength - 4 * props.urlImg.length) /
                      props.urlImg.length +
                    4 +
                    "px",
                }}
                src={imgAdd}
                alt=""
              />
            ))}

            {props.urlVideo.map((videoAdd, index) => (
              <video key={index} src={videoAdd} alt="" controls />
            ))}
          </div>
          <div className="analyst">
            <div className="emoji">
              <div className="icon-emoji">
                {/* <img
                  src="https://scontent.xx.fbcdn.net/m1/v/t6/An_p_GtpsNlMDEVWZr4AFkAPfy93yAtD7360WrRMu5gFpN7XbkK_meoLOk_IRtI6AwKbiv7I2VaOaEwXhFWrmpNNBG8nKmGs_rVlYdUOYpXf3bWw.png?ccb=10-5&oh=00_AT---14TkfXUdfYG6Kf2X1bR-7KIviHwDv4z-dvoCKbShg&oe=62F5350C&_nc_sid=55e238"
                  alt=""
                />
                <img
                  src="https://scontent.xx.fbcdn.net/m1/v/t6/An_owOs-UygJd2yvWszP_T3PnMzukn-wa2jnUrpbfAe-TWiVkC0kn11oCbOXjHh2hXNliWJVDSndPV2L6Nxp2bRzVrkkieVQmgZWQG0iTvoL699o7FQD.png?ccb=10-5&oh=00_AT8Oh-bDYkOX0SZKmbf0i2MDtJ4OzvZpDOG4BRDXovIU9w&oe=62F45460&_nc_sid=55e238"
                  alt=""
                />
                <img
                  src="https://scontent.fhph3-1.fna.fbcdn.net/m1/v/t6/An_H9Ao3uEtYIkxo3s8MpEyxcsLlzHZfZDm1sesMSGAjp0YZVuOIAips1GGtdXE2udIWRwccuPsURKBQxOp6FmgFieVvVawBonRlxh0jKuAABSdGpFw.png?ccb=10-5&oh=00_AT-0bcovnWvP750LF4-7DXArry7Osv7hx75DPjqLLteCnQ&oe=62F44E4F&_nc_sid=55e238"
                  alt=""
                />
                <img
                  src="https://scontent.xx.fbcdn.net/m1/v/t6/An85IUb4K3Vsz4ZBK3nmyxV5BvrVvAeb_MN1EyK1cShAmOKb2DKKSw6TbYCRpwvQRkegvSStvh9s942eRgsl2tFL70Ec7AvPlHjLW8b9HY6bFbXN.png?ccb=10-5&oh=00_AT-565Y26ntuSe_L5SdALyZ7ckpK153_v_jteSmIt9Yo6g&oe=62F3F8FB&_nc_sid=55e238"
                  alt=""
                /> */}
                <img
                  src="https://e7.pngegg.com/pngimages/118/689/png-clipart-emoji-facebook-like-button-facebook-like-button-smiley-random-buttons-emoticon-blog-thumbnail.png"
                  alt=""
                />
                <img
                  src="https://e7.pngegg.com/pngimages/474/499/png-clipart-facebook-messenger-like-button-emoji-face-heart-logo-love-text-thumbnail.png"
                  alt=""
                />
                <img
                  src="https://e7.pngegg.com/pngimages/968/897/png-clipart-facebook-like-logo-facebook-like-button-computer-icons-facebook-blue-text-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="like_count">
                {likeCountAction >= 1000
                  ? likeCountAction >= 1000000
                    ? Math.round((likeCountAction * 10) / 1000000) / 10 +
                      " triệu"
                    : Math.round((likeCountAction * 10) / 1000) / 10 + "K"
                  : likeCountAction}
              </div>
            </div>
            <div className="action">
              <p className="cmt_count">{props.cmtCount} bình luận</p>
              <p className="share_count">{props.shareCount} lượt chia sẻ</p>
            </div>
          </div>
          <div className="feed-action">
            <div className="action-container" onClick={(e) => handleLike(e)}>
              <span className="like"></span>
              <p className="like-action"> Thích</p>
            </div>
            <div className="action-container cmt">
              <span className="comment"></span>
              <p className="cmt-action"> Bình luận</p>
            </div>
            <div className="action-container">
              <span className="share"></span>
              <p className="share-action"> Chia sẻ</p>
            </div>
          </div>
          <div className="cmt-handle">
            <div className="cmt-header">
              <div className="select-cmt">
                Tất cả bình luận
                <AiFillCaretDown style={{ marginBottom: "-2px" }} />
              </div>
            </div>
            <div className="cmt-main">
              <div className="input-control">
                <User avatarUser="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg" />
                <input
                  value={wordCmt}
                  type="text"
                  placeholder="Viết bình luận công khai..."
                  onChange={(e) => handlecmt(e.target.value)}
                  onKeyDown={(e) => handlesendCmt(e.key)}
                />
              </div>
              <ul>
                {props.cmt.map((item, index) => {
                  return (
                    <li key={index}>
                      <User avatarUser={item.img_user_cmt} status={true} />
                      <span>
                        <div className="cmt-contain">
                          <h3 className="name-user">{item.name_user_cmt}</h3>
                          <p className="cmt-content">{item.content_comment}</p>
                        </div>
                        {item.img_media ? (
                          <img src={item.img_media} alt="" />
                        ) : (
                          ""
                        )}
                        {item.video_media ? (
                          <video src={item.video_media} controls></video>
                        ) : (
                          ""
                        )}
                      </span>
                      <div className="cmt-res">
                        <p>Thích</p>
                        <p>Phản hồi</p>
                        <p>Chia sẻ</p>
                        <p>
                          {item.time_ago >= 60
                            ? Math.round(item.time_ago / 60) + " giờ"
                            : item.time_ago + " phút"}
                        </p>
                      </div>
                    </li>
                  );
                })}
                {ListCmt.map((item, index) => (
                  <li key={index}>
                    <User
                      avatarUser="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                      status={true}
                    />
                    <span>
                      <div className="cmt-contain">
                        <h3 className="name-user">Dương Mạnh</h3>
                        <p className="cmt-content">{item}</p>
                      </div>
                    </span>
                    <div className="cmt-res">
                      <p>Thích</p>
                      <p>Phản hồi</p>
                      <p>Chia sẻ</p>
                      <p>Vừa xong</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="footer-feed">
                <div className="cmt-ago">Xem thêm bình luận...</div>
                <p className="cmt-analyst">{(2+ListCmt.length)}/{props.cmtCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
