import React from "react";
import { Banner } from "../../components/widgets/Banner";
import { Confianza } from "../../components/widgets/Confianza";
import { Productos } from "../../components/widgets/Productos";
import Widget from "../../components/widgets/Widget";

const Home = () => {
  console.log(process.env);

  return (
    <>
      {/* <Banner/> */}
      {/* <Confianza title={''}/>  */}
      <Widget title="¿Por qué confiar en nosotros?" subtitle="">
        <Confianza />
      </Widget>
      <Widget title="Productos" subtitle="Los mejores productos">
        <Productos />
      </Widget>
    </>
  );
};

export default Home;
