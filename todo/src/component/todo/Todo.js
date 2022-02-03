import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import InputTdo from './InputTdo';



const Todo = ({ title }) => {

    return (
        <>
            {/* HEADLINE */}
            <div className="title">
                <h1> <span><ArrowLeftOutlined  className="backArrow"/>  </span>{title}</h1>
            </div>
            {/*  LIST INPUT*/}
            <InputTdo />
        </>
    );
};

export default Todo;
