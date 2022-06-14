import {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {ProgressBar} from "react-bootstrap"

class Projects extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
              <div className="project">
                    <div className="projectName">
                            <div>{this.props.name}</div>
                            <div >{this.props.value}%</div>
                    </div>
                    <div>
                        <ProgressBar variant={this.props.color} now={this.props.value}
                        max={110}></ProgressBar>
                    </div>
              </div>
            </>
        )
    }
}
export default Projects