import logo from './images/Banner-Logo.png';
import {v4 as uuidv4} from 'uuid'
import Catagory from "./Components/Catagory";
import Adder from "./Components/Adder";
import FileUploader from "./Components/FileUploader";
import CategoryAdder from "./Components/CategoryAdder";
import Draggable from "react-draggable";
import React, {useState, useEffect} from "react";
// import Data from "./db.json";

/*TODO: add support for columns 1-4
        add option to set screen to secondary, columns 3-4
        make a way to remove items from the list
        stylize and pretify
        add support for multiple screens  
 */

//NOTES: on bug with input form not updating https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29769170#questions/16591110

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

    useEffect(() => {
        console.log("first UE")
        const item = localStorage.getItem('blob');
        if (item) {
            setMenuData(JSON.parse(item))
        }
    }, [])

    useEffect(() => {
        console.log("second UE")
        if (menuData.categories.length !== 0) {
            localStorage.setItem('blob', JSON.stringify(menuData));
        }

    }, [menuData])


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
                <div className="column">
                    {menuData.categories.filter(cat => cat.column == 1).map((cat) => (
                        <Catagory key={cat.id} catagoryData={cat} menuData={menuData}/>
                    ))}
                </div>
                <div className="column">
                    {menuData.categories.filter(cat => cat.column == 2).map((cat) => (
                        <Catagory key={cat.id} catagoryData={cat} menuData={menuData}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
