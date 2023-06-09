
export default function fetchLocation (lat, lng) {

    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_KEY}`)
        .then(res => res.json())
}