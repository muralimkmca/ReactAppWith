import React,{Component} from "react";
import { Navigation } from './Navigation';

export class Department extends Component{
    render(){
        return(
                <div> 
                    <Navigation />
                    <h3> This is my Department content Page</h3>
                </div>
            )    
    }
}
