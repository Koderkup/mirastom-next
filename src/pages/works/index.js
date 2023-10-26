import { useState, useEffect } from "react";
import Head from "next/head";
import Meta from "@/components/Meta";
import s from "../../styles/works.module.scss";
export default function Works() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowArrow(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <Meta />
      <>
        <div className={s.works}>
          <h1 className={s.works__title}>
            Эстетическая стоматология: до и после
          </h1>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698229332/test/ckcwsacbyfrpncjmfitt.png"
              alt="smile"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Хотите улучшить свою улыбку?
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Посмотрите, как коронки, виниры, отбеливание зубов, мосты,
              имплантаты, изменение формы десен или даже полное преображение
              зубов могут улучшить вашу улыбку.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698229578/test/kqwjarazx3m1pbfbqrzd.png"
              alt="bonding"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Стоматологический Бондинг
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Бондинг — это процедура, при которой смола цвета зуба наносится и
              затвердевает под действием специального света, в конечном итоге
              «прикрепляя» материал к зубу, чтобы улучшить улыбку человека.
              Среди самых простых и наименее дорогих косметических
              стоматологических процедур бондинг может восстановить сколы или
              трещины на зубах, закрыть щели, изменить форму зубов или
              использоваться в качестве косметической альтернативы пломбам из
              серебряной амальгамы.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698229741/test/ywgnhi4wo9omj311fzkr.png"
              alt="veners"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Виниры
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Виниры представляют собой тонкие пластинки, изготовленные по
              индивидуальному заказу, которые покрывают переднюю поверхность
              зубов. Виниры прикрепляются к передней части зубов, изменяя их
              цвет, форму, размер или длину, и могут быть изготовлены из фарфора
              или композитного материала. Виниры предлагают консервативный
              подход к изменению цвета или формы зуба по сравнению с коронками,
              но этот процесс необратим.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698229842/test/hxgvbi8kynyzhdmbtx2f.png"
              alt="crowns"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Коронки
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Коронка — это «колпачок» в форме зуба, который надевается на
              слабый или поврежденный зуб, чтобы улучшить его форму, размер,
              прочность или внешний вид. Большинство коронок служат от пяти до
              15 лет и могут быть изготовлены из металла, фарфора, сплавленного
              с металлом, смолы или керамики. Перед установкой коронки
              существующий зуб опиливается; затем на него цементируют коронку,
              полностью покрывающую зуб. Накладки и трехчетвертные коронки в
              меньшей степени покрывают подлежащий зуб.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698229991/test/ctnzbbbdykl0zezaiu7c.png"
              alt="smile"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Формирование эмали
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Формирование или контурирование эмали — это быстрый и
              безболезненный процесс придания формы естественным зубам с целью
              улучшения их внешнего вида. Обычно его используют для исправления
              небольших дефектов, таких как неровные зубы или слегка скученные
              зубы. Результаты можно увидеть сразу. Придание формы эмали часто
              комбинируется с отбеливанием, винирами или бондингом.
            </p>
          </div>

          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698230102/test/k7avqninoyvpery03fww.png"
              alt="smile"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Отбеливание зубов
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Кому не нравится яркая улыбка? Доступен широкий ассортимент систем
              отбеливания зубов, включая зубные пасты и ополаскиватели,
              безрецептурные гели, полоски и каппы, а также отбеливающие
              средства, полученные от стоматолога. Но отбеливание подходит не
              всем. Идеально подходит для людей со здоровыми, не
              восстановленными зубами и деснами. Люди с желтыми оттенками зубов
              (в отличие от серых тонов) реагируют лучше всего. Поговорите со
              своим стоматологом, чтобы узнать, подходит ли вам отбеливание.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698230222/test/k5miskwlti4m5bxery9e.png"
              alt="smile"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Композитные пломбы
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Существующие пломбы иногда требуют замены из-за износа, сколов или
              трещин. Многие люди используют эту возможность, чтобы заменить
              свои серебряные амальгамные пломбы натуральными композитами цвета
              зубов. Их причины могут быть эстетическими или опасениями по
              поводу безопасности амальгамных пломб, содержащих ртуть.
              Композитные пломбы, как правило, изнашиваются раньше, чем
              серебряные пломбы в больших полостях, хотя они также хорошо
              держатся в небольших полостях.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698230342/test/w76nejn914uypknjgkmp.png"
              alt="smile"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Изменение формы десен
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Изменение формы десен может улучшить «клейкую» улыбку, при которой
              зубы кажутся слишком короткими или линия десен выглядит неровной.
              Небольшое количество ткани десен (и при необходимости избыток
              костной ткани) удаляется и корректируется, чтобы обнажить большую
              часть зубов. Эту процедуру можно провести на одном зубе, чтобы
              выровнять линию десен, или на нескольких зубах, чтобы обнажить
              естественную широкую улыбку.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698230424/test/infpab7bwj4ildordrbf.png"
              alt="smile"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Имплантаты
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Миллионы людей страдают от потери зубов, в основном из-за кариеса,
              заболеваний десен или травм. Зубные имплантаты – замещающие корни
              зубов, изготовленные из титана (показаны слева) – обеспечивают
              прочную основу для крепления постоянных или съемных искусственных
              зубов (коронок). Вместо отдельных коронок у некоторых пациентов на
              имплантате могут быть насадки, поддерживающие съемный протез.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698230521/test/twu6ot1pyo0fbbjj25w1.png"
              alt="dentures"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Протезы
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Протез – это съемная замена отсутствующих зубов и окружающих
              тканей. Существует два типа зубных протезов – полные и частичные.
              Полные протезы используются, когда отсутствуют все зубы, а
              частичные протезы используются, когда сохранились некоторые
              естественные зубы.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698230631/test/pu0hgcepu5xuwbmnubim.png"
              alt="bridges"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Мосты (несъемные частичные протезы)
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Фиксированный (постоянный) мост заменяет один или несколько зубов
              путем установки коронок на зубы по обе стороны от щели и
              прикрепления к ним искусственных зубов. Затем «мост» цементируется
              на место. Консольный мост используется, когда зубы есть только на
              одной стороне открытого пространства. Мостовидные протезы
              Мэриленда имеют фарфоровые зубы, поддерживаемые каркасом.
            </p>
          </div>
          <div className={s.works__paragraph_container}>
            <img
              className={s.works__paragraph_container__paragraph_image}
              src="https://res.cloudinary.com/dlr2olc8r/image/upload/v1698230748/test/uda9fkck3gt8lvjfrepw.png"
              alt="gums"
            />
            <h1 className={s.works__paragraph_container__paragraph_title}>
              Трансплантаты десен
            </h1>
            <p className={s.works__paragraph_container__paragraph_text}>
              Корни зубов, обнаженные из-за рецессии десен, могут быть
              чувствительны к горячей и холодной пище или жидкостям, из-за чего
              зубы кажутся длинными. Рецессия десны может подвергнуть вас риску
              образования полости на корне зуба и привести к потере костной
              массы, что в конечном итоге приведет к потере зуба. Трансплантаты
              мягких тканей, которые перемещают здоровую ткань десен из одной
              части рта в другую, могут остановить рецессию десен и потерю
              костной массы, а также улучшить эстетику линии десен.
            </p>
          </div>
        </div>
        {showArrow && (
          <a href="#" className={s.scroll_to_top} onClick={scrollToTop}>
            <img src="/assets/slider-arrow.svg" alt="arrow" />
          </a>
        )}
      </>
    </>
  );
}
