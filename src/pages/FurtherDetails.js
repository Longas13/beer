import { useState, useEffect } from "react";

import "./furtherDetails.css"

const FurtherDetails = (props) => {
    const [allBeer, setAllBeer] = useState(props);
    const [foundedBeer, setFoundedBeer] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setAllBeer(props)
    }, [props])

    useEffect(() => {
        const urlId = window.location.pathname.slice(9)
        const urlIdNumber = Math.floor(urlId)
        const newArr = allBeer.allBeer
        const findBeer = newArr.find(x => x.id === urlIdNumber)
        setIsLoading(false)
        return setFoundedBeer(findBeer)
    }, [allBeer.allBeer])

    return (
        <>
            {isLoading ? ("Loading ...") : (
                <div className="details" >
                    <div className="image-left">
                        <img className="img-block" src={foundedBeer.image_url} alt="Card  cap" />
                    </div>
                    <div className="text-right">
                        <h1 className="beer-name">{foundedBeer.name}</h1>
                        <h3 className="beer-tagline">{foundedBeer.tagline}</h3>
                        <div className="beer_description"><b>Description: </b>{foundedBeer.description}</div>
                        <div className="beer-brewed"><b>Founded: </b>{foundedBeer.first_brewed}</div>
                        <div className="beer-ph"><b>PH: </b>{foundedBeer.ph}</div>
                        <div className="beer-food"><b>Food pairing: </b>
                            <ul>
                                {foundedBeer.food_pairing.map((food) => {
                                    return (<li key={food}>{food}</li>)
                                })}
                            </ul></div>
                        <div className="beer-tips">
                            <b>Tips: </b>
                            {foundedBeer.brewers_tips}</div>
                        <div className="beer-method">
                            {/* <b>Method: </b>{method} */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FurtherDetails;