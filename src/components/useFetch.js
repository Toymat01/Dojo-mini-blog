import { useEffect, useState } from 'react'



const UseFetch = (url) =>{

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        fetch(url)
        .then((res) =>{
            if(!res.ok){
                throw Error('could not fetch data for that resource')
            }
           return res.json()
        })
        .then((data) =>{
            setIsPending(false)
            setData(data)
           setError(null)
        })
        .catch(err =>{
            setData(null)
            setIsPending(false)
            setError(err.message)
        })
    }, [url])
    return{data, error, isPending}

}

export default UseFetch