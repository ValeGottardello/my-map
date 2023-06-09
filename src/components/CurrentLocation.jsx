import Map from "./Map"
import useGeolocation from "./useGeolocation"

export default function CurrentLocation() {

    const [coords, address] = useGeolocation()
    console.log(coords)
    return (
        <section> 
            <div className="map"> 
                { coords && <Map coords={coords}/>}
            </div>
            <aside>
                <h1>Your current location</h1>
                <p>Lat: {coords?.lat}</p>
                <p>Long: {coords?.lng}</p>
                <p>Address: {address} </p>
            </aside>
        </section>
    )
}
