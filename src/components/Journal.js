
const Journal = function Journal(props)
{
    return (
        <div className="App">
            <section>
                <img src={props.imageUrl} alt={props.title} className="travel-img"/>
                <div className="container">
                    <span>
                        <img src="images/location.png" alt="location-icon" className=""/>
                        <span className='location'> {props.location}</span>
                        <span> <a href={props.googleMapUrl} className='map'>View on Google Maps</a></span>
                    </span>
                    <h2 className='title'>{props.title}</h2>
                    <span className='date'>{props.startDate} - {props.endDate}</span>
                    <p className='description'>{props.description}</p>
                </div>
            </section>
            <hr className="divider"/>
        </div>
    )
}

export default Journal