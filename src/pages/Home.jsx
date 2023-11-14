import BinaryGenerator from '../components/BinaryGenerator'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <div id="hero">
                <BinaryGenerator />
                <div className='home-content'>
                    <img src="./bitskrieg_logo.png" alt="" id="title" />
                    <div className='typewriter-home-content'><p>One of India's Top 10 CTF team and Cybersecurity Club.</p></div>
                </div>
            </div>
        </>
    )
}