import {UserAuth} from "../context/AuthContext";
import {Navigate} from "react-router-dom";
import SavedShows from "../components/SavedShows";

function Account(children: any) {
    // @ts-ignore
    const {user} = UserAuth()
    if (!user) {
        return <Navigate to="/"/>
    } else {
        return (
            <div>
                <div className="w-full text-white">
                    <img className="w-full h-[400px] object-cover"
                         src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/42b5dfb2-43c7-478f-a264-4a16c1f13ccb/BR-pt-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                         alt=""/>
                    <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
                        <div className="absolute top-[20%] p-4 md:p-8">
                            <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
                        </div>
                    </div>
                </div>
                <SavedShows/>
            </div>
        )
    }
}

export default Account
