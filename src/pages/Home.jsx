import BinaryGenerator from '../components/BinaryGenerator'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import announcements from "../assets/announcements.json"
import AnnouncementCard from '../components/AnnouncementCard'

export default function Home() {
    return (
        <>
            <Navbar />
            <div id="hero">
                <BinaryGenerator />
                <div className='home-content'>
                    <img src="./bitskrieg_logo.png" alt="" id="title" />
                    <div className='typewriter-home-content'><p>BITS Goa&apos;s Cybersecurity Club</p></div>
                </div>
            </div>
            <div>
                <h1><span id="title-span">{">"} Announcements</span></h1>
                {announcements.announcements?.length>0?
                announcements.announcements?.reverse().map((e, index) => <AnnouncementCard key={index} value={e} />)
                :<p>No announcements yet.</p>}
            </div>
        </>
    )
}