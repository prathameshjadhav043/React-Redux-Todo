import React from 'react'
import Forms from './Forms'
import { useSelector } from 'react-redux'


export const FormsItems = () => {

    const items = useSelector((state) => state.todoReducers.data);

    return (
        <div className="main">
            <label className="t">Submited Forms</label>
            <hr />
            {items.map((item) => {
                return (
                    <Forms item={item} key={item.id} />
                )
            })}
        </div>
    );
}