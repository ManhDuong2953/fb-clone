import "./user.scss";

export default function User(props) {
  function handleStatus(props) {
    if (props.status === true) {
      return (
        <>
          <span className="online"></span>
        </>
      );
    } else if (props.status === undefined) {
      return <></>;
    } else {
      return (
        <>
          <span className="offline">
            {props.status >= 60
              ? Math.round(props.status / 60) + " giờ "
              : props.status + " phút"}
          </span>
        </>
      );
    }
  }
  return (
    <>
      <div className="user-container">
        <div className="img-contain">
          <img
            src={props.avatarUser}
            onError={(event) => {
              event.target.onerror = "";
              event.target.src =
                "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg";
              return true;
            }}
            alt=""
            className="avatar"
          />
          {handleStatus(props)}
        </div>
        <p className="name-user">{props.nameUser}</p>
      </div>
    </>
  );
}
