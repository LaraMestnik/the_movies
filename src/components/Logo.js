import { Link } from "react-router-dom";

export default function Logo({ className }) {
    return (
        <div>
            <Link to="/"><h1 className={`logo ${className}`}>the movies</h1></Link>
        </div>
    )
}
