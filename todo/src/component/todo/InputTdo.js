import React, { useState } from "react";
import { StarOutlined,CheckCircleOutlined,DeleteOutlined } from '@ant-design/icons';

const InputTdo = () => {

    const [listItemData, setlistItemData] = useState("");
    const [itemData, setitemData] = useState([]);
    const [show, setShow] = useState(false);
    const [star, setStar] = useState(false);
    
    const addItem = () => {
        if (!listItemData) {
            alert("fill up");
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: listItemData,
            };
            console.log(myNewInputData);
            setitemData([...itemData, myNewInputData]);
            setlistItemData("");

        }
    }
    const checkItem = () => {
        setShow(!show);
    }
    const starClicked = () => {
        setStar(!star);
    }
    const deleteItem = (index) => {
        const updatedList = itemData.filter((curElem) => {
            return (curElem.id!== index);
        });
        setitemData(updatedList);
    }

    return (
        <>
            {/*  LIST INPUT*/}
            <div className="list_input">
                <div className="">
                    <input type="text" name="list-Item"
                        className="input_list"
                        value={listItemData}
                        placeholder="👉 Add list here..."
                        onChange={(Event )=> { setlistItemData(Event.target.value) } }/>
                    <button className="btn" onClick={addItem}>Add to list</button>
                </div>
            </div>

            {/* LISTING ITEM */}
            {itemData.map((curEle,index) => {
                return (
                    <>
                        <div className="item_list" key={curEle.id}>
                            <p> 
                                {
                                    show ?
                                    <CheckCircleOutlined className="radio-btn-checked" onClick={checkItem} /> :
                                    <CheckCircleOutlined className="radio-btn" onClick={checkItem}/>
                                }
                                {
                                    show ?
                                    <span className="line-through">{`${curEle.name}`}</span> :
                                    <span className="list-item-para ">{`${curEle.name}`}</span>
                                }
                                <DeleteOutlined className="delete" onClick={()=>deleteItem(curEle.id)} />
                                {
                                    star ?
                                    <StarOutlined className='star-clicked' onClick={starClicked} /> :
                                    <StarOutlined className='star'onClick={starClicked} />
                                }
                            </p>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default InputTdo;
