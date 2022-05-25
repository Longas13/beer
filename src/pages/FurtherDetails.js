import { useState, useEffect } from "react";

import "./furtherDetails.css"

const FurtherDetails = (props) => {
    const [allBeer, setAllBeer] = useState(props);
    const [foundedBeer, setFoundedBeer] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const findSingleBeer = async () => {
            const urlId = Math.floor(window.location.pathname.slice(9))
            const findBeer = await allBeer.allBeer.find(beer => beer.id === urlId)
            setIsLoading(false)
            setAllBeer(props)
            setFoundedBeer(findBeer)
        }
        findSingleBeer()
    }, [allBeer.allBeer, props])

    const methods = foundedBeer.method

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
                            {foundedBeer.food_pairing.map((food) => {
                                return (<p key={food}>- {food}</p>)
                            })}
                        </div>
                        <div className="beer-tips">
                            <b>Tips: </b>
                            {foundedBeer.brewers_tips}</div>
                        <div className="beer-method">
                            <b>Fermentation temperature: </b>
                            {methods.fermentation.temp.value} {methods.fermentation.temp.unit}
                            <br />
                            {methods.twist === null ? "" : (<><b>Twist: </b>{methods.twist}</>)}
                            <br />
                            {methods.mash_temp.map((temp) => {
                                return (
                                    <><b key={temp.temp.value}>Mash temp: </b>
                                        {temp.duration ? `${temp.duration} minutes at ` : ""}
                                        {temp.temp.value} {temp.temp.unit} <br />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FurtherDetails;