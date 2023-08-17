import React, {useState} from 'react';
import MenuItem from "./MenuItem";

function Catagory({categoryData, menuData}) {

    const mirrored = categoryData.column % 2 === 0;

    return (
        <div>
            <h1 className={"lato category"} >{categoryData.title}</h1>
            {menuData.items.filter(item => item.category === categoryData.title).map((item) => (

                <MenuItem key={item.id} itemData={item} mirrored={mirrored}/>
            ))}
        </div>
    );
}

export default Catagory;