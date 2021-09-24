import "./sass/Widget.scss";
import "./sass/Confianza.scss";
import confianza_1 from '../../assets/images/confianza_1.png';
import confianza_2 from '../../assets/images/confianza_2.png';
import confianza_3 from '../../assets/images/confianza_3.png';

export const Confianza = () => {
  return (
   <>
   <div className="widget__elements confianza">
        <div className="widget__elements--item">
          <img src={confianza_1} alt="" />
          <span>Las mejores ofertas</span>
        </div>
        <div className="widget__elements--item">
          <img src={confianza_2} alt="" />
          <span>Programar es divertido y seguro!</span>
        </div>
        <div className="widget__elements--item">
          <img src={confianza_3} alt="" />
          <span>Somos expertos en ReactJS</span>
        </div>
      </div>
   </>
  );
};
