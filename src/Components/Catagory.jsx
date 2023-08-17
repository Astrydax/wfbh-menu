import React, {useState} from 'react';
import MenuItem from "./MenuItem";

function Catagory({catagoryData, menuData, deleteItem, deleteCategory}) {
    const [hovered, setHovered] = useState(false);
    return (
        <div onMouseEnter={e => {
            setHovered(true);
        }}
             onMouseLeave={e => {
                 setHovered(false)
             }}>
            {hovered && (<button type={"button"}
                                 onClick={() => deleteCategory(catagoryData.id)}>Delete
            </button>)}
            <h1 className={"lato category"} >{catagoryData.title}</h1>
            {menuData.items.filter(item => item.category === catagoryData.title).map((item) => (
                <MenuItem key={item.id} itemData={item} deleteItem={deleteItem}/>
            ))}
        </div>
    );
}

export default Catagory;