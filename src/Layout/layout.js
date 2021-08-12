import React from "react"
import Navbar from "./Navbar"
import { Route,Switch,BrowserRouter } from "react-router-dom"
import manage from "../View/manage"

export default class Layout extends React.Component {
    render(){
        return(
            <div>
                <div className="main-wrapper">
                    <Navbar/>
                    <BrowserRouter>
                    <div className="main-content">
                        <section className="section">
                            <div className="section-body">
                                <Switch>
                                    <Route exact path="/" component={manage} /> 
                                    <Route path ="/manage" component={manage} />
                                </Switch>
                            </div>
                        </section>
                    </div>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}