import logo from './images/Banner-Logo.png';
import {v4 as uuidv4} from 'uuid'
import Catagory from "./Components/Catagory";
import Adder from "./Components/Adder";
import FileUploader from "./Components/FileUploader";
import CategoryAdder from "./Components/CategoryAdder";
import Draggable from "react-draggable";
import React, {useState} from "react";
// import Data from "./db.json";

/*TODO: add support for columns 1-4
        add option to set screen to secondary, columns 3-4
        make a way to remove items from the list
        stylize and pretify
        add support for multiple screens  
 */

function App() {
    const Data = {
        "categories": [],
        "items": []
    }

    const [menuData, setMenuData] = useState(Data);

    const addItem = (newItem) => {
        newItem.id = uuidv4();
        setMenuData(current => ({...current, items: [...current.items, newItem]}));
    }

    const addCategory = (newItem) => {
        newItem.id = uuidv4();
        setMenuData(current => ({...current, categories: [...current.categories, newItem]}));
    }

    return (
        <div className="App">

            <Draggable>
                <div className={"ui"}>
                    <FileUploader menuData={menuData} setMenuData={setMenuData}/>
                </div>
            </Draggable> <Draggable>
            <div className={"ui"}>
                <CategoryAdder handleAddCategory={addCategory}/>
            </div>
        </Draggable>
            <Draggable>
                <div className={"ui"}><Adder menuData={menuData} setMenuData={setMenuData}
                                             handleAddItem={addItem}></Adder></div>
            </Draggable>

            <img id={"banner"} src={logo} alt=""/>
            <div id="main" className={"row"}>
                <div className="column"> empty column</div>
                <div className="column">
                    {menuData.categories.map((cat) => (
                        <Catagory key={cat.id} catagoryData={cat} menuData={menuData}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
