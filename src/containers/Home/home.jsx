import React from 'react';
import Hero from "../../components/Hero/hero.jsx"
import Features from "../../components/Features/features.jsx"
import Header from "../../components/Header/header.jsx"
import './home.css';

function Home() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Features />
    </main>
    </>
  );
}

export default Home;