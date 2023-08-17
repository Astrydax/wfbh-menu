import React, {useState} from 'react';

function MenuItem({itemData,deleteItem}) {
    const [hovered, setHovered] = useState(false);


    return (
        <div className={"menu-item"} onMouseEnter={e => {
            setHovered(true);
        }}
             onMouseLeave={e => {
                 setHovered(false)
             }}>
            <div className={"row"}>
                <h3 className={"item-name column lato"}>{itemData.name}</h3>
                <p className={"column item-price"}>{itemData.price}</p>
            </div>
            {hovered && (<button type={"button"}
                                 onClick={() => deleteItem(itemData.id)}>Delete
            </button>)}
            <div className={"item-details row"}>
                <p className={"item-description column"}>{itemData.description}</p>
                <img className={"item-image"} src={itemData.image} alt=""/>
            </div>

        </div>
    );
}

export default MenuItem;