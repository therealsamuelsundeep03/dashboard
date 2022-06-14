import { Component  } from "react";
import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Personal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Card className="personal box" style={{borderLeftWidth:4,borderLeftColor: this.props.color}}>
                    <div>
                            <h6 style={{color:this.props.color}}>{this.props.title}</h6>
                                <div>
                                    <span>{this.props.value}</span>
                                    {this.props.title === "TASKS" &&
                                    <span><progress max="100" value={50} style={{width:"rem"}}></progress></span>                        
                                }
                                </div>
                    </div>
                </Card>
            </>            
        )
    }
}
export default Personal;