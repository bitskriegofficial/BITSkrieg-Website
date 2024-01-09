import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function ArchiveCard({ value }) {
    return (
        <div className="archive-card">
            <h2>{value?.title}</h2>
            <p><Link to={value?.link}>{value?.link}</Link></p>
            <p>{value?.content}</p>
        </div>
    )
} 