import { useState, useRef } from 'react'
import './App.css'
import {Link} from 'react-scroll'
import BinaryGenerator from './components/BinaryGenerator'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <Navbar />
      <div id="hero">
        <BinaryGenerator />
        {/* <h1 id="title">bitskrieg</h1> */}
        <img src="./bitskrieg_logo.png" alt="" id="title" />
      </div>
      <Cards />
      <div className="content" id='about-section'>
          <h1><span id="title-span">About</span></h1>
          <h2>We are One of India’s Top Rated CTF Teams</h2>
          <p>
            We are a group of students with keen interest in breaking, exploiting,
            and securing software systems.
          </p>
          <p>
            Our current members are experienced in various domains such as web
            exploits, pwning, reverse-engineering, forensics, cryptography, and OS
            exploits. We participate in global Capture The Flag Competitions
            (CTFs) and are listed on <a href='https://ctftime.org/' target='_blank' id="link-span">ctftime.org</a>.
          </p>
          <p>
            We organize the annual BITSCTF; an online hacking competition in which
            in 2019 over 530 international teams participated. We are currently
            ranked 232nd on CTFtime's international leaderboard, and 8th in India.
          </p>
          <p>
            The competitions we participate in involve a variety of challenges
            which involve exploiting vulnerabilities in cryptosystems, reverse
            engineering executables, using techniques such as SQL injection and
            CSRF and identifying, scanning and exploiting vulnerabilities in
            remote servers. These competitions are generally hosted by companies
            like Google, Microsoft, Facebook and TrendMicro.
          </p>
      </div>
      <div className="content" id='members-section'>
          <h1><span id="title-span">Members</span></h1>
          <h2>Members subtitle</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rem optio consequatur nulla hic? Quis inventore tenetur ea? Dolores illum nihil amet, asperiores pariatur repellat? Quia exercitationem praesentium doloremque assumenda ratione ipsam fuga provident, saepe error accusamus labore, veritatis repudiandae laboriosam fugit quis. Hic, ab ipsum distinctio labore exercitationem modi?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium, debitis quod commodi voluptas at provident exercitationem officiis eos ratione molestiae aut possimus temporibus, pariatur dolores minima ex sed minus sint inventore sequi totam nobis ducimus. Quia non, cupiditate id quae laboriosam nam voluptatem distinctio.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia error illum sapiente id sit repellat adipisci sed assumenda dolor reiciendis sunt nam ducimus nesciunt unde, ad possimus praesentium deleniti, corrupti magnam. Accusamus vel nisi ea minima officiis, sunt deserunt similique harum necessitatibus libero quae? Esse consequatur nesciunt corrupti doloremque inventore voluptates mollitia laborum provident. Eos optio enim minus. Aliquam, quasi suscipit quis voluptatum enim officiis!
          </p>
      </div>
      <div className="content" id='contact-section'>
          <h1><span id="title-span">Contact</span></h1>
          <h2>Contact us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rem optio consequatur nulla hic? Quis inventore tenetur ea? Dolores illum nihil amet, asperiores pariatur repellat? Quia exercitationem praesentium doloremque assumenda ratione ipsam fuga provident, saepe error accusamus labore, veritatis repudiandae laboriosam fugit quis. Hic, ab ipsum distinctio labore exercitationem modi?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium, debitis quod commodi voluptas at provident exercitationem officiis eos ratione molestiae aut possimus temporibus, pariatur dolores minima ex sed minus sint inventore sequi totam nobis ducimus. Quia non, cupiditate id quae laboriosam nam voluptatem distinctio.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia error illum sapiente id sit repellat adipisci sed assumenda dolor reiciendis sunt nam ducimus nesciunt unde, ad possimus praesentium deleniti, corrupti magnam. Accusamus vel nisi ea minima officiis, sunt deserunt similique harum necessitatibus libero quae? Esse consequatur nesciunt corrupti doloremque inventore voluptates mollitia laborum provident. Eos optio enim minus. Aliquam, quasi suscipit quis voluptatum enim officiis!
          </p>
      </div>
      
      <Footer />
    </>
  )
}

export default App
