import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const value = 'Hello'
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <div>
      <Navbar></Navbar>
      <section className="max-container">
        {isPageLoading ? <div>Loading...</div> : <Outlet context={{value}} ></Outlet>}
      </section>
    </div>
  );
};

export default HomeLayout;
