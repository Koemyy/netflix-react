import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";
import {useState} from "react";
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //@ts-ignore
    const {user, signUp} = UserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="w-full h-screen">
                <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/42b5dfb2-43c7-478f-a264-4a16c1f13ccb/BR-pt-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
                </div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                                <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" placeholder="Email" type="email" autoComplete="email"/>
                                <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" placeholder="Password" type="password" autoComplete="current-password"/>
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sing Up</button>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p><input className="mr-2" type="checkbox"/> Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8 space-x-2"><span className="text-gray-600">Already subscribed to Netflix?</span>
                                    <Link to="/login">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
