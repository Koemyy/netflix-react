import {useEffect, useState} from "react";
import axios from "aaxios";
import Movie from "./Movie";

interface RowSection {
    title: string,
    fetchURL: string
}
function Row ({title, fetchURL}: RowSection) {
    const [movies, setMovies] = useState<any[]>([]);
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    console.log(movies)

    return (
        <div>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center">
                <div id={'slider'}>
                    {
                        movies.map((item, id) => {
                            return (
                                <Movie key={id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Row
