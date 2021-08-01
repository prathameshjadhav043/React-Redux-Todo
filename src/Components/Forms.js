import React from 'react'
import { delTodo } from '../Actions/index'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


const Forms = (props) => {

    const { fname,lname, username, id, city, State, zip} = props.item;

    const [detail, setDetail] = useState(false)

    const dispatch = useDispatch();

    const del = () => {
        dispatch(delTodo(id));
    }


    return (
        <div className='form_m'>
            <div className="form_d">
                    <label className="fn mx-1">{fname}</label>
                    <label className="us mx-1">{lname}</label>
                <div className='btns'>
                    <button className="btn btn_ btn-sm btn-info text-white mx-1" onClick={() => {
                        setDetail((e) => {
                            if (e) return false; else return true;
                        })
                    }} >Details</button>
                    <button className="btn btn_ btn-sm btn-danger mx-1" onClick={() => { del() }}>Delete</button>
                </div>
            </div>
            {detail ?
                (<>
                <div className='container'>
                    <label className="u">{username}</label>
                    <label className="c">{city}</label>
                    <label className="s">{State}</label>
                    <label className="z">{zip}</label>
                </div>
                <hr />
                </>) : (<></>)
            }
        </div>
            
    )
}

export default Forms;