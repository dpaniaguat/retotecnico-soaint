import React from "react";
//import { Banner } from "../../components/widgets/Banner";
//import { Confianza } from "../../components/widgets/Confianza";
//import { Productos } from "../../components/widgets/Productos";
import Widget from "../../components/widgets/Widget";
import { widgetData } from "../../utils/widgetsData";

const Home = () => {

  return (
    <>
      {widgetData &&
        widgetData.map(
          ({ id, show, subtitle, tipo, title, width, component }) =>
            show && (
              <Widget title={title} subtitle={subtitle} key={id}>
                {React.createElement(component)}
              </Widget>
            )
        )}
    </>
  );
};

export default Home;
