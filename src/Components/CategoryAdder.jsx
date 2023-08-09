import React, {useState} from 'react';
import Button from "./shared/Button";

function CategoryAdder({handleAddCategory}) {
    const [opened, setOpened] = useState(true);
    const [categoryName, setCategoryName] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName.trim().length > 0) {
            const newItem = {
                title: categoryName,
                column: 0
            }
            handleAddCategory(newItem);
            setCategoryName("");
        }
    }

    const handleCategoryNameChange = (e) => {
        setCategoryName(e.target.value)
        validationCheck();
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
                            <Button type={"submit"} version={"input"} isDisabled={btnDisabled}>Submit</Button>
                        </div>
                    </form>
                </div>
            )}

        </div>
    );
}

export default CategoryAdder;