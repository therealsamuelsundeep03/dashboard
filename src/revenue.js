import { Component } from "react";
import { Card } from "react-bootstrap";
import 'chart.js/auto';
import { Chart} from "react-chartjs-2";

class Revenue extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <Card style={{width:"32rem"}} className="box">
                    <Card.Header>Revenue Sources</Card.Header> 
                    <Card.Body>
                        <Chart
                            type="doughnut"
                            data={{
                                labels:["Direct","Social","Referal"],
                                datasets: [{
                                    label: '# of Votes',
                                    data: [55,30,15],
                                    backgroundColor:["#4e73df","#1cc88a","#36b9cc"]
                                }],      
                            }}
                            height={400}
                            width={100}
                            options={{maintainAspectRatio:false, cutout:140}}
                        />
                    </Card.Body>                  
                </Card>
            </>
        )
    }
}
export default Revenue;