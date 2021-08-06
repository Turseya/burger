import React, {useState} from "react";
import top from "../../assets/top.jpg"
import bottom from "../../assets/bottom.jpg"
import "./burger.css";
import salad from "../../assets/lettuse.jpg";
import cheese from "../../assets/cheese.jpg";
import meat from "../../assets/meat.jpg";
import tomato from "../../assets/tomato.jpg";
import {NavLink} from "react-router-dom";

const Burger = () => {
    const defaultValue = {
        "salad": 0,
        "cheese": 0,
        "meat": 0,
        "tomato": 0,
    }

    const [price, setPrice] = useState(5.00)
    const [ingredients, setIngredients] = useState(defaultValue);
    const [saladImages, addSaladImages] = useState([]);
    const [cheeseImages, addCheeseImages] = useState([]);
    const [meatImages, addMeatImages] = useState([]);
    const [tomatoImages, addTomatoImages] = useState([]);

    const showSaladImages = saladImages.map((el, index) => {
        return <img key={index} src={el} alt="" />
    });
    const showCheeseImages = cheeseImages.map((el, index) => {
        return <img key={index} src={el} alt="" />
    });
    const showMeatImages = meatImages.map((el, index) => {
        return <img key={index} src={el} alt="" className="img-meat" />
    });
    const showTomatoImages = tomatoImages.map((el, index) => {
        return <img key={index} src={el} alt="" />
    })

    function showTitle() {
        if(saladImages.length === 0 && cheeseImages.length === 0 && meatImages.length === 0 && tomatoImages.length === 0) {
            return <h3 >Please add some ingredients</h3>
        }
        return '';
    }

    function deleteImages(ingredient) {
        switch (ingredient) {
            case "salad":
                const tempSalads = [...saladImages];
                tempSalads.pop();
                addSaladImages(tempSalads);
                break;
            case "cheese":
                const tempCheeses = [...cheeseImages];
                tempCheeses.pop();
                addCheeseImages(tempCheeses);
                break;
            case "meat":
                const tempMeats = [...meatImages];
                tempMeats.pop();
                addMeatImages(tempMeats);
                break;
            case "tomato":
                const tempTomatos = [...tomatoImages];
                tempTomatos.pop();
                addTomatoImages(tempTomatos);
        }
    }

  function addRemoveIngredients(action, ingredient) {
        if (action === "add") {
            switch (ingredient) {
                case "salad":
                    setIngredients((ingredients) => ({
                        ...ingredients,
                        ["salad"]: ingredients.salad + 1
                    }));
                    setPrice(price + 1.00)
                    addSaladImages(saladImages => [...saladImages, salad])
                    break;
                case "cheese":
                    setIngredients((ingredients) => ({
                        ...ingredients,
                        ["cheese"]: ingredients.cheese + 1
                    }));
                    setPrice(price + 2.00);
                    addCheeseImages(cheeseImages => [...cheeseImages, cheese])
                    break;
                case "meat":
                    setIngredients((ingredients) => ({
                        ...ingredients,
                        ["meat"]: ingredients.meat + 1
                    }));
                    setPrice(price + 4.00);
                    addMeatImages(meatImages => [...meatImages, meat])
                    break;
                case "tomato":
                    setIngredients((ingredients) => ({
                        ...ingredients,
                        ["tomato"]: ingredients.tomato + 1
                    }));
                    setPrice(price + 3.00);
                    addTomatoImages(tomatoImages => [...tomatoImages, tomato])
                    break;
            }
        } else {
            switch (ingredient) {
                case "salad":
                    setIngredients((ingredients) => ({
                        ...ingredients,
                        ["salad"]: ingredients.salad - 1
                    }));
                    setPrice(price - 1.00);
                    deleteImages('salad');
                    break;
                case "cheese":
                    setIngredients((ingredients) => ({
                        ...ingredients,
                        ["cheese"]: ingredients.cheese - 1
                    }));
                    setPrice(price - 2.00);
                    deleteImages('cheese');
                    break;
                case "meat":
                    setIngredients((ingredients) => ({
                        ...ingredients,
                        ["meat"]: ingredients.meat - 1
                    }));
                    setPrice(price - 4.00);
                    deleteImages('meat');
                    break;
                case "tomato":
                    setIngredients((ingredients) => ({
                        ...ingredients,
                        ["tomato"]: ingredients.tomato - 1
                    }));
                    setPrice(price - 3.00);
                    deleteImages('tomato');
                    break;
            }
        }

    }

    return (
        <div className="burger-wrapper">
            <div className="burger-container">
                <img src={top} className="burger-top" />
                {showTitle()}
                <div className="ingredients-img">
                    {showSaladImages}
                    {showCheeseImages}
                    {showMeatImages}
                    {showTomatoImages}
                </div>

                <img src={bottom} className="burger-bottom" />
            </div>
            <div className="burger-ingredients">
                <h3>Current Price:{price}</h3>
                    <div className="salad">
                        <h3>Salad</h3>
                        <div className="btn-salad">
                            <button value={ingredients.salad}
                                    onClick={() => {addRemoveIngredients("add", "salad")}}
                                    className="btn-more">More
                            </button>
                            <button value={ingredients.salad}
                                    onClick={() => {addRemoveIngredients("remove", "salad")}}
                                    disabled={ingredients.salad == 0 ? true : false}
                                    className="btn-less">Less
                            </button>
                        </div>
                    </div>
                <div className="cheese">
                    <h3>Cheese</h3>
                    <div className="btn-cheese">
                        <button
                            onClick={() => {addRemoveIngredients("add", "cheese")}}
                            className="btn-more">More</button>
                        <button onClick={() => {addRemoveIngredients("remove", "cheese")}}
                                disabled={ingredients.cheese == 0 ? true : false}
                                className="btn-less">Less</button>
                    </div>
                </div>
                <div className="meat">
                    <h3>Meat</h3>
                    <div className="btn-meat">
                        <button onClick={() => {addRemoveIngredients("add", "meat")}}
                                className="btn-more">More</button>
                        <button onClick={() => {addRemoveIngredients("remove", "meat")}}
                                disabled={ingredients.meat == 0 ? true : false}
                                className="btn-less">Less</button>
                    </div>
                </div>
                <div className="tomato">
                    <h3>Tomato</h3>
                    <div className="btn-tomato">
                        <button onClick={() => {addRemoveIngredients("add", "tomato")}}
                                className="btn-more">More</button>
                        <button onClick={() => {addRemoveIngredients("remove", "tomato")}}
                                disabled={ingredients.tomato == 0 ? true : false}
                                className="btn-less">Less</button>
                    </div>
                </div>
                    <button disabled={price == 5.00 ? true : false}
                            className="register-btn">
                            <NavLink to="/auth">Register to order</NavLink>
                    </button>
            </div>
        </div>
    )
}

export default Burger;