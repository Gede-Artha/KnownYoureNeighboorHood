import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import Content from "./Content";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Content />
    </MainLayout>
  );
};

export default HomePage;
