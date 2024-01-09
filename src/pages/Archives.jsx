import { Fragment } from "react"
import Navbar from "../components/Navbar"
import archives from "../assets/archives.json"
import ArchiveCard from "../components/ArchiveCard"

export default function Archives() {
  return (
    <Fragment>
      <Navbar />
      <div className="content">
        <h1><span id="title-span">{">"} Archives</span></h1>
        {archives.archives?.map(e=><ArchiveCard value={e}/>)}
      </div>
    </Fragment>
  )
}