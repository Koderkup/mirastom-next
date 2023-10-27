
import s from "../styles/footer.module.scss";
import { FaViber, FaTelegram, FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import HeaderTop from './HeaderTop';
import HeaderNavbar from './HeaderNavbar';
import Link from "next/link";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.link_container}>
        <div className={s.left_side}>
          <img src="/assets/logo_mirastom.svg" alt="logo" />
          <div className={s.schedule}>
            <p>Время работы:</p>
            <p>Пн-Пт: 9:00 - 20:00</p>
            <p>Суббота: 9:00 - 14:00 (ПО ЗАПИСИ)</p>
            <p>Воскресенье: выходной</p>
          </div>
          <div className={s.social_block}>
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
        <div className={s.middle}>
          <Link className={s.header_navbar__link} href="/">
            Главная
          </Link>
          <Link className={s.header_navbar__link} href="/works">
            Наши работы
          </Link>
          <Link className={s.header_navbar__link} href="/about">
            О клинике
          </Link>
          <Link className={s.header_navbar__link} href="/contacts">
            Контакты
          </Link>
          <Link className={s.header_navbar__link} href="/reviews">
            Отзывы<sup className={s.sup}>скоро</sup>
          </Link>
        </div>
        <div className={s.right_side}>
          <MdLocationOn
            className={s.header_top__icon}
            color="blue"
            size="32px"
          />
          <span>г.Витебск, ул.Фрунзе, 81/1</span>
          <span>
            МТС: +375 (29) 813-86-90 <br /> А1: +375 (29) 334-72-65
          </span>
        </div>
      </div>

      <div className={s.text_block}>
        <p>
          Обращаем Ваше внимание на то, что данный сайт носит исключительно
          ознакомительный характер. За более детальной информацией обращайтесь
          по телефону +375 (29) 813-86-90
        </p>
        <p className={s.all_rights}>
          Мирастом &copy; All rights reserved. {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
