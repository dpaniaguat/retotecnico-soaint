import "./sass/Sidebar.scss";
export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar-content">
        <div className="sidebar-content__head">
          <h3>ENTÉRATE DE LO NUEVO SOBRE NUEVOS PRODUCTOS.</h3>
          <p>
            Obtenga información exclusiva sobre nuevos productos, eventos y más.
          </p>
        </div>
        <div className="sidebar-content__actions">
          <span>Suscribirme</span>
          <input type="text" placeholder='Ingrese su correo'/>
          <div className="sidebar-content__button">
            <button>Enviar</button>
          </div>
        </div>
      </section>
    </aside>
  );
};
