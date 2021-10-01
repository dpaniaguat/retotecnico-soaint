// import "./sass/Widget.scss";
import "./sass/EConfianza.scss";
import confianza_1 from '../../assets/images/cards.webp';
import confianza_2 from '../../assets/images/delivery.webp';
import confianza_3 from '../../assets/images/security.webp';

export const EConfianza = () => {
  return (
   <>
   <div className="widget-econfianza">
    <div className="confianza-elements">
        <div className="confianza-elements__item">
          <img src={confianza_1} alt="" />
          <span>Las mejores ofertas</span>
        </div>
        <div className="confianza-elements__item">
          <img src={confianza_2} alt="" />
          <span>Programar es divertido y seguro!</span>
        </div>
        <div className="confianza-elements__item">
          <img src={confianza_3} alt="" />
          <span>Somos expertos en ReactJS</span>
        </div>
        </div>
      </div>
   </>
  );
};
