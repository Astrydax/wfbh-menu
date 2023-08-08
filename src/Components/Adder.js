import React from 'react';
import { useState } from 'react';
import Data from "../data.json";

function Adder({data}) {
    const [menuData, setMenuData] = useState(data);

    const[category, setCategory] = useState("");
    const handleCategoryChange = (e) => {
        console.log(e.target.value)
    }

    const [itemName,setItemName] = useState("");
    const handleNameChange = (e) => {
        setItemName(e.target.value)
    }

    const [itemPrice,setItemPrice] = useState("");
    const handlePriceChange = (e) => {
        setItemPrice(e.target.value)
    }

    const [itemDescription,setItemDescription] = useState("");
    const handleDescriptionChange = (e) => {
        setItemDescription(e.target.value)
    }

    const [itemImage,setItemImage] = useState("");
    const handleItemImageChange = (e) => {
        setItemImage(e.target.value)
    }




    return (
        <div className={"adder"}>
            <form>
                <h2>
                    Add new item
                </h2>
                <div className="input-group row">
                    <select className={"column input"} onChange={handleCategoryChange}>
                        <option value="">Choose A Category</option>
                        {menuData.categories.map((cat) => <option key={cat.id} value={cat.title}>{cat.title}</option>)}
                    </select>
                    <input className={"column input"} type="text" onChange={handleNameChange}  placeholder={"Name for Item"}/>
                    <input className={"column input"} type="text" onChange={handlePriceChange}  placeholder={"Item Price"}/>
                    <textarea rows="5" className={"column input"} type="text" onChange={handleDescriptionChange}  placeholder={"Item Description"}/>
                    <input className={"column input"} type="text" onChange={handleItemImageChange}  placeholder={"Image URL (optional)"}/>
                    <button className={"column input"} type={"submit"}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Adder;