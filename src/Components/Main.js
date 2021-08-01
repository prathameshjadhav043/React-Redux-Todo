import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Actions';


const Main = () => {

    const [fname, setFname] = useState('');
    const [lname, setlname] = useState('');
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addTodo(fname, lname, username, city, state, zip))
        setFname('');
        setlname('');
        setUsername('');
        setCity('');
        setState('');
        setZip('');
    }

    return (

        <>
            <div className="main">
                <form className="row g-3 needs-validation" onSubmit={submit}>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom01" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder='First Name' required value={fname} onChange={(e) => { setFname(e.target.value) }} />
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom02" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder='Last Name' required value={lname} onChange={(e) => { setlname(e.target.value) }} />
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" placeholder="Username" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={username} onChange={(e) => { setUsername(e.target.value) }} />
                            <div className="invalid-feedback">Please choose a username. </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom03" className="form-label">City</label>
                        <input type="text" className="form-control" placeholder="City" id="validationCustom03" required value={city} onChange={(e) => { setCity(e.target.value) }} />
                        <div className="invalid-feedback">Please provide a valid city.</div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom04" className="form-label">State</label>
                        <select className="form-select" id="validationCustom04" required value={state} onChange={(e) => { setState(e.target.value) }}>
                            <option selected disabled >Choose...</option>
                            <option>...</option>
                            <option>Maharshtra</option>
                            <option>Hydrabad</option>
                            <option>Chennai</option>
                            <option>Banglore</option>
                            <option>Gujrat</option>
                            <option>Utterpardes</option>
                        </select>
                        <div className="invalid-feedback">Please select a valid state.</div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom05" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationCustom05" requiredvalue={zip} onChange={(e) => { setZip(e.target.value) }} />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">Agree to terms and conditions</label>
                            <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-sm btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Main;