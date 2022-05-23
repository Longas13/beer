import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BeerList = (props) => {

    const [allBeer, setAllBeer] = useState(props);
    const [isChecked, setIsChecked] = useState(false);
    const [filteredBeer, setFilteredBeer] = useState([])

    useEffect(() => {
        setAllBeer(props)
    }, [props])

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        const filterBeer = allBeer.allBeer

        let beerSelected = filterBeer.filter(beer => beer.first_brewed.slice(3) <= "2010")
        if (!isChecked === true) {
            setFilteredBeer(beerSelected)
        } else {
            setFilteredBeer([])
        }
    };

    const beerOptions = !isChecked ? allBeer.allBeer : filteredBeer

    return (
        <>
            <div className="beer-list">
                <form>
                    <h5>Beer made until 2010</h5>
                    <label className="switch">
                        <input
                            type="checkbox"
                            id="beer-before"
                            checked={isChecked}
                            onChange={handleOnChange} />
                        <span className="slider round"></span>
                    </label>
                </form>
                {beerOptions.map(singleBeer => {
                    return (
                        <div className="card" key={singleBeer.id}>
                            <img className="card-img-top" src={singleBeer.image_url} alt="Card  cap" />
                            <div className="card-body">
                                <div className="card-tag-line">{singleBeer.tagline}</div>
                                <h5 className="card-title">{singleBeer.name}</h5>
                                <p className="card-text">{singleBeer.description}</p>

                                <Link to={`/beer/id-${singleBeer.id}`} className="btn btn-primary"> Read more ...</Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    );
};

export default BeerList;