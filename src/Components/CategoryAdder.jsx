import React, {useState} from 'react';
import Button from "./shared/Button";

function CategoryAdder({handleAddCategory}) {
    const [opened, setOpened] = useState(true);
    const [categoryName, setCategoryName] = useState("");
    const [column, setColumn] = useState(1);

    const [btnDisabled, setBtnDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName.trim().length > 0) {
            const newItem = {
                title: categoryName,
                column: column
            }
            handleAddCategory(newItem);
            setCategoryName("");
            setColumn(1);
        }
    }

    const handleCategoryNameChange = (e) => {
        setCategoryName(e.target.value)
        validationCheck();
    }

    const handleColumnChange = (e) => {
        setColumn(e.target.value)
    }

    function validationCheck() {

        setBtnDisabled(!(categoryName !== ""));

    }

    return (
        <div>
            {opened && (
                <div id={"category-adder"}>
                    <form onSubmit={handleSubmit}>

                        <button type={"button"} id={"close-item-adder-btn"}
                                onClick={() => setOpened(false)}>X
                        </button>

                        <h2 style={{textAlign: "center"}}>
                            Create a New Category
                        </h2>

                        <div className="input-group ">

                            <input className={"input "} type="text" onChange={handleCategoryNameChange} value={categoryName}
                                   placeholder={"Category Name"}/>

                            <p>Columns 1-2 are screen 1. </p>
                            <p>Columns 3-4 are screen 2</p>

                            <select className={"input"} onChange={handleColumnChange} value={column}  >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>

                            <Button type={"submit"} version={"input"} isDisabled={btnDisabled}>Submit</Button>
                        </div>
                    </form>
                </div>
            )}

        </div>
    );
}

export default CategoryAdder;