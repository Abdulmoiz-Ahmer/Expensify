import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

export default class NotFoundPage extends Component {
    render() {
        return (
            <div>
    404!-<NavLink to="/">Go Home</NavLink>
                
            </div>
        )
    }
}
