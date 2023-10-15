import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

export class Root extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Outlet></Outlet>
            </>
        )
    }
}

export default Root