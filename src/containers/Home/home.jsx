import React from 'react';

import Hero from "../../components/Hero/hero.jsx"
import Feature from "../../components/Feature/feature.jsx"
import Header from "../../components/Header/header.jsx"

import chat from '../../assets/images/icon-chat.png'
import money from '../../assets/images/icon-money.png'
import security from '../../assets/images/icon-security.png'

import './home.css';

function Home() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature Src={chat} Alt="Icon Chat" title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
        <Feature Src={money} Alt="Icon Money" title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!"/>
        <Feature Src={security} Alt="Icon Security" title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe."/>
      </section>
    </main>
    </>
  );
}

export default Home;