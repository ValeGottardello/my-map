import { useEffect, useState } from "react"
import fetchLocation from "../api/fetchLocation"

function useGeolocation () {
    const [coords, setCoords] = useState(null)
    const [address, setAddress] = useState(null)

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(res => {
            const {latitude: lat , longitude : lng } = res.coords
            setCoords({ lat, lng})
        })
    },[])

    useEffect(() => {
        if(!coords) return

        fetchLocation(coords.lat, coords.lng)
            .then(data => {
                data = data.results[0].formatted_address
                setAddress(data)
            })
    },[coords?.lat, coords?.lng])

    console.log(coords, address)
    return [coords, address] 
}

export default useGeolocation