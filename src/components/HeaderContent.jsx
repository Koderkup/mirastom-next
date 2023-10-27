import { useState } from "react";
import s from "../styles/HeaderContent.module.scss";

const HeaderContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundImageStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dlr2olc8r/image/upload/v1696858150/test/qfkwoeg0khdjrlthmvm4.png')`,
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={s.header_content}>
      <div className={s.left_side}>
        <h1>
          Ловите <i style={{ color: "#00BFFF" }}>сезонные скидки</i> на услуги
          терапевта!
        </h1>
        <div className={s.button_container}>
          <button onClick={openModal}>Заказать звонок</button>
          <button>Узнать подробнее</button>
        </div>
      </div>

      <div className={s.img_container} style={backgroundImageStyle}></div>
    </div>
  );
};

export default HeaderContent;
