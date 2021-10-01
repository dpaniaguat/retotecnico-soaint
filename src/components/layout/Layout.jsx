import React from "react";
import { Modal } from "../common/Modal";
import Container from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";
import HeaderCinta from "./HeaderCinta";
import { Navbar } from "./Navbar";
import "./sass/Layout.scss";
import { Search } from "./Search";
import { Sidebar } from "./Sidebar";
import { UserSession } from "./UserSession";

const Layout = ({ children }) => {

  return (
    <div className="app_wrapper">
      <Modal></Modal>
      <HeaderCinta />
      <Header />
      <UserSession />
      <Navbar />
      <Search />
      <Sidebar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
