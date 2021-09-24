import "./sass/Widget.scss";

export const Widget = ({
  title = "Mi widget",
  backgroundColor = "grey",
  component: Component,
}) => {
  return (
    <section className="widget confianza">
      <div className="widget__head">
        <hr />
        <strong className="widget__title">{title}</strong>
        <hr />
      </div>

      <div className="widget__elements">
        <div className="widget__elements--item">
          <img alt="" />
          <span>Las mejores ofertas en productos.</span>
        </div>
      </div>
    </section>
  );
};
