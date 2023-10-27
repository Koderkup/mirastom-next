import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FcTabletAndroid } from "react-icons/fc";
import { FaViber, FaTelegram, FaInstagram } from "react-icons/fa";
import s from "../styles/HeaderTop.module.scss";
import {  useSelector } from "react-redux";
const HeaderTop = () => {
  // const {isAdmin, name} = useSelector((state)=> state.user);
  return (
    <div className={s.header_top}>
      <div className={s.header_top__item}>
        <span style={{fontSize:"30px", color: "red"}}>ghbdtn</span>
        <MdLocationOn className={s.header_top__icon} color="blue" size="32px" />
        <span>г.Витебск, ул.Фрунзе, 81/1</span>
      </div>
      <div className={s.header_top__social_media}>
        <div className={s.header_top__item}>
          <a href="viber://chat?number=375298138690">
            <FaViber
              className="header-top__icon header-top__icon--round"
              color="#7360F2"
              size="32px"
            />
          </a>
          <a href="https://t.me/mirastom">
            <FaTelegram
              className="header-top__icon header-top__icon--round"
              color="#279FDB"
              size="32px"
            />
          </a>
          <a
            href="https://www.instagram.com/mirastom_vitebsk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="header-top__icon header-top__icon--round"
              color="#FD572D"
              size="32px"
            />
          </a>
        </div>
      </div>
      <div className={s.header_top__item}>
        <FcTabletAndroid
          className={s.header_top__icon}
          color="blue"
          size="32px"
        />
        <span>
          МТС: +375 (29) 813-86-90 <br /> А1: +375 (29) 334-72-65
        </span>
      </div>
    </div>
  );
};

export default HeaderTop;
