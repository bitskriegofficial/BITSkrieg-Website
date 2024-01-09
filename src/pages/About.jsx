import { Fragment, useState } from "react"
import Navbar from "../components/Navbar"
import membersList from "../assets/members.json"
import MemberCard from "../components/MemberCard";

export default function About() {

  const [members, setMembers] = useState({
    Core: [],
    Crew: [],
    Alumni: []
  })

  function fetchMembers() {
    const core = membersList.members?.filter(e => e.designation === "Core");
    const crew = membersList.members?.filter(e => e.designation === "Crew");
    const alumni = membersList.members?.filter(e => e.designation === "Alumni");

    setMembers({
      Core: core,
      Crew: crew,
      Alumni: alumni
    })
  }

  useState(() => {
    fetchMembers();
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className="content">
        <h1><span id="title-span">{">"} About</span></h1>
        <h2>We are One of India's Top Rated CTF Teams</h2>
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
        <h1><span id="title-span">{">"} Our Team</span></h1>
        <div className="members-subsection-container">
          <h2>Coordinators</h2>
          <div className="members-subsection">
            <MemberCard
              value={membersList.members?.filter(e => e.designation === "Chief Coordinator")[0]}
            />
            <MemberCard
              value={membersList.members?.filter(e => e.designation === "Technical Head")[0]}
            />
            <MemberCard
              value={membersList.members?.filter(e => e.designation === "Operations Head")[0]}
            />
          </div>
        </div>
        {Object.keys(members).map((e) => {
          return (
            <div className="members-subsection-container" style={{ display: members[e]?.length > 0 ? "flex" : "none" }}>
              <h2>{e}</h2>
              <div className="members-subsection">
                {members[e]?.map((member, i) => <MemberCard key={i} value={member} />)}
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}