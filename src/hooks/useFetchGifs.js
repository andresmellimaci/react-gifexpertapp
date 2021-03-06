import { useState, useEffect } from "react"
import { GetGifs } from "../helpers/GetGifs"

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        GetGifs(category).then(gifs => {
            setState({
                data: gifs,
                loading: false
            })
        })
    }, [category])

    return state;
}
