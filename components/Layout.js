import React, { Children } from "react"
import styles from './layout.module.css'
export default class Layout extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            {this.props.children}
        </div>)
    }
}