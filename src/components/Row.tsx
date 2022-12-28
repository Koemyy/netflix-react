import {useEffect, useState} from "react";
import axios from "aaxios";
import Movie from "./Movie";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
interface RowSection {
    title: string,
    fetchURL: string
    rowID: string,
}
function Row ({title, fetchURL, rowID}: RowSection) {
    const [movies, setMovies] = useState<any[]>([]);
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID);
        if (slider === null) {
            return
        }
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID);
        if (slider === null) {
            return
        }
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full scroll-smooth absolute opacity-50 hover:opacity-100 cursor-pointer hidden z-10 group-hover:block" size={40}/>
                <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    {
                        movies.map((item, id) => {
                            return (
                                <Movie key={id} item={item}/>
                            )
                        })
                    }
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
        </div>
    )
}

export default Row
