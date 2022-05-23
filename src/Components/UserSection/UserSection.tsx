import React, { useState } from "react";
import "./usersection.scss";
import Bell from "../../Assets/Bell";
import { useNavigate } from "react-router";

const imgUrl =
  "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-1/251374287_946849012708805_4517610628801416846_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iq4047Q04nEAX_7QCHv&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT9PZfuZ27rQ9AhYL9Sh0hlsNZ7bDdgrdM_pFJfS97F85A&oe=628F89BB";
  const notifications = [
  { user: "Võ Thị Lan Anh", content: "12h30 ngày 31/2/2020" },
  { user: "Hoàng Nguyễn Quốc Huy", content: "12h30 ngày 31/2/2020" },
  { user: "Võ Thị Lan Anh", content: "12h30 ngày 31/2/2020" },
  { user: "Nguyễn Thị Thùy Dung", content: "12h30 ngày 31/2/2020" },
  { user: "Nguyễn Thiên Trinh", content: "12h30 ngày 31/2/2020" },
  { user: "Võ Thị Kim Liên", content: "12h30 ngày 31/2/2020" },
];

const UserSection: React.FC = () => {
  const [notificationExpand, setNotificationExpand] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="app__user-section">
      <div
        className={`notification-bell ${notificationExpand && `active`}`}
        onClick={() => setNotificationExpand((prev) => !prev)}
      >
        <Bell />
        {notificationExpand && (
          <div className="notification-container">
            <div className="notification-container__header">Thông báo</div>
            <div className="notification-container__scroll-container">
              {notifications.map((item) => {
                return (
                  <div className="notification-item">
                    <div className="notification-item__title">
                     { `Người dùng: ${item.user}`}
                    </div>
                    <div className="notification-item__content">
                       {`Thời gian nhận số: ${item.content}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="avatar">
        <img src={imgUrl} alt="" onClick={() => navigate("user-info")}/>
      </div>
      <div className="hello-user">
        <span className="hello">Xin chào</span>
        <span className="user-name">Phạm Minh Nhựt</span>

      </div>
    </div>
  );
};

export default UserSection;