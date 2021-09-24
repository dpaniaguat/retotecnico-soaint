import "./sass/Sidebar.scss";
export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar-content">
        <h3>Capturador de correos</h3>
        <div className="siderbar-content--input">
          <input type="text" />
        </div>
        <div className="siderbar-content--button">
          <button>Suscribirme</button>
        </div>
      </section>
    </aside>
  );
};
