import React from 'react';
import {useState} from 'react';
import Button from "./shared/Button";


function Adder({data, handleAddItem}) {
    const [menuData, setMenuData] = useState(data);
    const [opened, setOpened] = useState(true)

    const [category, setCategory] = useState("");
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
        validationCheck()
    }

    const [itemName, setItemName] = useState("");


    const handleNameChange = (e) => {
        setItemName(e.target.value)
        validationCheck()
    }

    const [itemPrice, setItemPrice] = useState("");
    const handlePriceChange = (e) => {
        setItemPrice(e.target.value)
        validationCheck()
    }

    const [itemDescription, setItemDescription] = useState("");
    const handleDescriptionChange = (e) => {
        setItemDescription(e.target.value)
        validationCheck()
    }

    const [itemImage, setItemImage] = useState("");
    const handleItemImageChange = (e) => {
        setItemImage(e.target.value)
        validationCheck()
    }

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    //BUG: Validation doesn't actually turn on the button until the second render that meets conditions
    function validationCheck() {
        const fields = {
            category: category !== "",
            itemName: itemName !== "",
            itemPrice: itemPrice !== "",
            itemDescription: itemDescription !== ""
        }
        const result = fields.category && fields.itemName && fields.itemPrice && fields.itemDescription;

        setBtnDisabled(!result);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemName.trim().length > 0) {
            const newItem = {
                name: itemName,
                category: category,
                price: itemPrice,
                description: itemDescription,
                image: itemImage
            }
            handleAddItem(newItem);
            setItemName("");
            setItemPrice("");
            setCategory("");
            setItemImage("");
            setItemDescription("");
        }
    }


    return (
        <div>
            {opened && (<div className={"adder"}>
                <form onSubmit={handleSubmit}>
                    <button id={"close-item-adder-btn"}
                            onClick={() => setOpened(false)}>X
                    </button>
                    <h2 style={{textAlign: "center"}}>
                        Add new item
                    </h2>
                    <div className="input-group ">
                        <select className={"input"} onChange={handleCategoryChange} value={category}>
                            <option>Choose A Category</option>
                            {menuData.categories.map((cat) => <option key={cat.id}>{cat.title}</option>)}
                        </select>
                        <input className={" input"} type="text" onChange={handleNameChange} value={itemName}
                               placeholder={"Name for Item"}/>
                        <input className={" input"} type="text" onChange={handlePriceChange} value={itemPrice}
                               placeholder={"Item Price"}/>
                        <textarea rows="5" className={"input"} type="text" onChange={handleDescriptionChange}
                                  value={itemDescription} placeholder={"Item Description"}/>
                        <input className={" input"} type="text" onChange={handleItemImageChange} value={itemImage}
                               placeholder={"Image URL (optional)"}/>
                        <Button type={"submit"} version={"input"} isDisabled={btnDisabled}>Submit</Button>
                        {message && <div className={"error-message"}>{message}</div>}
                    </div>
                </form>
            </div>)}
        </div>
    );
}

export default Adder;