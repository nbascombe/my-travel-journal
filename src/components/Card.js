import pin from '../images/pin.png'

export function Card(props) {
    return (
        <div className="card">
            <div className='card_img'>
                <img src={props.imageUrl} alt=''></img>
            </div>
            <div>
                <div className='card_location'>
                    <img className='card_location_pin' src={pin} alt=''></img>
                    <span className='location'>{props.location}</span>
                    <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h1 className='card_title'>{props.title}</h1>
                <p className='card_date'>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}