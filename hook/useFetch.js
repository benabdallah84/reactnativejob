import { useState, useEffect } from 'react'
import axios from 'axios'
//import { RAPID_API_KEY } from '@env'

//const API_KEY = RAPID_API_KEY


const useFetch = (endpoint, query) =>{
    const [ data, setData ] = useState([])
    const [ isLoading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

   

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    
        headers: {
            'X-RapidAPI-Key': '141c9b5e44msh77f991592be5d89p1e79adjsn64216', //API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
            params: {
                ...query
        }
    }

    const fatchData = async () => {
    setLoading(true)
    try {
        const response = await axios.request(options);

        setData(response.data.data)
        setLoading(false)
        
    } catch (error) {
        setError(error)
        console.log(error)
        
    } finally {
        setLoading(false)
    }
    }

   useEffect(() => fatchData(), [])

   const reFetch = ()=>{ 
    setLoading(true)
    fatchData()
    }

    return { data, isLoading, error, reFetch }
}

export default useFetch