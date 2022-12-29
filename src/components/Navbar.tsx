import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to="/">
                <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
            </Link>
            <div>
                <Link to="/login">
                    <button className="text-white pr-4">Sing In</button>
                </Link>
                <Link to="/singup">
                    <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sing Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
