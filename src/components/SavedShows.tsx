import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {useState, useEffect} from "react";
import {UserAuth} from "../context/AuthContext";
import {db} from '../firebase';
import {updateDoc, doc, onSnapshot} from 'firebase/firestore';
import {AiOutlineClose} from "react-icons/ai";
function SavedShows () {
    const [movies, setMovies] = useState<any[]>([]);
    // @ts-ignore
    const {user} = UserAuth()
    const slideLeft = () => {
        let slider = document.getElementById('slider');
        if (slider === null) {
            return
        }
        slider.scrollLeft = slider.scrollLeft - 500
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        if (slider === null) {
            return
        }
        slider.scrollLeft = slider.scrollLeft + 500
    };

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user.email}`);
    const deleteShow = async (passedID: any) => {
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full scroll-smooth absolute opacity-50 hover:opacity-100 cursor-pointer hidden z-10 group-hover:block" size={40}/>
                <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    {
                        movies?.length ? (
                            movies.map((item, id) => (
                                <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                                    <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.image}`}
                                        alt={item?.title} />
                                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                                        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item?.title}</p>
                                        <p onClick={() => deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4"><AiOutlineClose /></p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white">No shows saved</p>
                        )
                    }
                </div>

                <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
        </div>
    )
}

export default SavedShows
