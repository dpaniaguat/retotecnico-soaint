import "./sass/Widget.scss";

const Widget = ({ title = "Sección", subtitle = "", children }) => {
  return (
    <section className="widget">
      <div className="widget-head">
        <h3 className="widget-head__title">{title}</h3>
        {subtitle.length > 0 && (
          <span className="widget-head__subtitle">{subtitle}</span>
        )}
        <hr />
      </div>
      <div className="widget-body">{children}</div>
    </section>
  );
};

export default Widget;
