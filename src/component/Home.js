import React,{Component} from "react";
import { Navigation } from './Navigation';

export class Home extends Component{
    render(){
        return(                
                <div> 
                    <Navigation />
                    <h3> This is my Home content Page</h3>
                </div>
            )    
    }
}
