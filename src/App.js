import logo from './images/Banner-Logo.png';
import {v4 as uuidv4} from 'uuid'
import Catagory from "./Components/Catagory";
import Adder from "./Components/Adder";
import FileUploader from "./Components/FileUploader";
import CategoryAdder from "./Components/CategoryAdder";
import ScreenSelector from "./Components/ScreenSelector";
import Draggable from "react-draggable";
import React, {useState, useEffect} from "react";
// import Data from "./db.json";

/*TODO:
        stylize and pretify
 */

//NOTES: on bug with input form not updating https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29769170#questions/16591110

function App() {
    const Data = {
        "categories": [],
        "items": []
    }

    const [menuData, setMenuData] = useState(Data);
    const [screenNumber, setScreenNumber] = useState(1);


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

    const deleteItem = (itemId) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setMenuData(current => ({
                ...current,
                items: current.items.filter(item => item.id !== itemId)
            }));
        }
    }
    const deleteCategory = (categoryId) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            setMenuData(current => ({
                ...current,
                categories: current.categories.filter(category => category.id !== categoryId)
            }));
        }
    }


    function filterFunc(cat, screenColumnNumber) {
        if(screenColumnNumber === 1){
            if(screenNumber == 1){
                return cat.column == 1;
            }else{
                if(screenNumber == 2){
                    return cat.column == 3
                }
            }
        } else if(screenColumnNumber === 2){
            if(screenNumber == 1){
                return cat.column == 2;
            }else{
                if(screenNumber == 2){
                    return cat.column == 4
                }
            }
        }

        return undefined;
    }

    return (
        <div className="App">

            <Draggable>
                <div className={"ui"}>
                    <FileUploader menuData={menuData} setMenuData={setMenuData}/>
                </div>
            </Draggable>
            <Draggable>
                <div className={"ui"}>
                    <ScreenSelector setScreenNumber={setScreenNumber}/>
                </div>
            </Draggable>
            <Draggable>
            <div className={"ui"}>
                <CategoryAdder handleAddCategory={addCategory}/>
            </div>
        </Draggable>
            <Draggable>
                <div className={"ui"}><Adder menuData={menuData} setMenuData={setMenuData}
                                             handleAddItem={addItem}></Adder></div>
            </Draggable>

            <img id={"banner"} src={logo} alt=""/>
            <div id="content-main" className={"row"}>
                <div className="column">
                    {menuData.categories.filter(cat => filterFunc(cat, 1)).map((cat) => (
                        <Catagory key={cat.id} catagoryData={cat} menuData={menuData} deleteItem={deleteItem} deleteCategory={deleteCategory}/>
                    ))}
                </div>
                <div className="column">
                    {menuData.categories.filter(cat => filterFunc(cat, 2)).map((cat) => (
                        <Catagory key={cat.id} catagoryData={cat} menuData={menuData} deleteCategory={deleteCategory} deleteItem={deleteItem}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
