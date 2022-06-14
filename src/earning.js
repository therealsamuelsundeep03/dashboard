import { Component } from "react";
import { Card } from "react-bootstrap";
import 'chart.js/auto';
import {Line} from "react-chartjs-2";

class EarningOverview extends Component{
    constructor(props){
        super(props);
    }  
    data = {
        labels: ['Jan','Feb', 'Mar','Apr', 'May','Jun', 'July','Aug','Sep', 'Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Earnings',
            data: [0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,35000,30000,40000],
            fill: true,
            backgroundColor:"rgb(219, 240, 253,0.3)",
            pointColor:"#4e73df",
            pointBackgroundColor:"#4e73df",
            borderColor:"#4e73df",
            pointRadius:8,
            tension: 0.4
          },
        ],
      };
         
    render(){
        return(<>
                    <Card className="box">
                        <Card.Header>Earning Overview</Card.Header>
                        <Card.Body>
                            {/* <Chart /> */}
                            <Line data={this.data} options={this.options} height={175}/>
                        </Card.Body>
                    </Card>
               </>)
    }
}
export default EarningOverview;