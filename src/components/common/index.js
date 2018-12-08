import React from 'react'
import './index.css'

export const Card = props => (
    <div className="card">
        {props.children}
    </div>
)

export const Button = props => 
    <button {...props} className={props.className+ " btn "}>
        {props.children}
    </button>

