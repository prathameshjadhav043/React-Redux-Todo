import React from 'react'
import './App.css'
import { Nav } from './Components/Nav'
import Main from './Components/Main'
import { FormsItems } from './Components/FormItems'


const App = () => {
    return (
        <>
            <Nav />
            <Main />
            <FormsItems />
        </>
    )
}

export default App;