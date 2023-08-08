import React from 'react';
import { useState } from 'react';
import Data from "../data.json";

function Adder({data}) {
    const [menuData, setMenuData] = useState(data);

    const[category, setCategory] = useState("");
    const handleCategoryChange = (e) => {
        console.log(e.target.value)
    }




    return (
        <div className={"adder"}>
            <form>
                <h2>
                    Add new item
                </h2>
                <div className="input-group">
                    <select onChange={handleCategoryChange}>
                        <option value="">Choose A Category</option>

                        {menuData.categories.map((cat) => <option key={cat.id} value={cat.title}>{cat.title}</option>)}
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Adder;