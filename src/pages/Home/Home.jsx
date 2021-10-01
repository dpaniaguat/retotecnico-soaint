import React from "react";
import Widget from "../../components/widgets/Widget";
import { widgetData } from "../../utils/widgetsData";

const Home = () => {
  return (
    <>
      {widgetData &&
        widgetData
          .find((item) => item.page === "home")
          ?.widgets.map(
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
