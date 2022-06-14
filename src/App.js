import { Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Personal from "./personal";
import EarningOverview from "./earning";
import Revenue from "./revenue";
import { Container, Row, Col, Card } from "react-bootstrap";
import Projects from "./project";
import image from "./image.png";


class App extends Component{
  constructor(props){
    super(props);
  }
  // values to be sent to personal
  personal = [
    {title:"EARNINGS (MONTHLY)",color:"blue",value:"$40,000"},
    {title:"EARNINGS (ANUALLY)",color:"rgb(88, 184, 88)",value:"$215,000"},
    {title:"TASKS",color:"blue",value:"50%"},
    {title:"PENDING REQUESTS",color:"blue",value:"18"}];
   
  projects=[
    {title:"Server Migration", value:"20",color:"danger"},
    {title:"Sales Tracking", value:"40",color:"warning"},
    {title:"Customer Database", value:"60",color:"primary"},
    {title:"Payout Details", value:"80", color:"info"},
    {title:"Account Setup", value:"100",color:"success"}
  ]  

  colorVariants=[
    {name:"Primary", hexa:"#4e73df"},
    {name:"Success", hexa:"#1cc88a"},
    {name:"Info", hexa:"#36b9cc"},
    {name:"Warning", hexa:"#f6c23e"},
    {name:"Danger", hexa:"#e74a3b"},
    {name:"Dark", hexa:"#5a5c69"},
    {name:"Secondary", hexa:"#858796"},
    {name:"Light", hexa:"#f8f9fc"},
  ]
  render(){
    return(
      <>
        <h2 className="title">Dashboard</h2>
        <Container>
          {/* personal info */}
          <Row>
            {this.personal.map((a)=>{
              return (<>
                          <Col >
                            <Personal title={a.title} color={a.color} value={a.value}/>
                          </Col> 
                      </>)
            })}
          </Row>
          {/* charts */}
          <Row>
            <Col md={7} className="header"><EarningOverview /></Col>
            <Col md={4} className="header"><Revenue /></Col>
          </Row>
          {/* project and illustrations */}
          <Row>
            {/* projects */}
            <Col>
              <Card className="projects box">
                  <Card.Header className="header">Projects</Card.Header>
                  <Card.Body>
                    {this.projects.map((p)=>{
                      return <Projects name={p.title} value={p.value} color={p.color}/>
                    })}
                  </Card.Body>
                </Card>
            </Col>
            {/* illustrations */}
            <Col>
                <Card className="illus box">
                  <Card.Header className="header">Illustrations</Card.Header>
                  <Card.Body>
                    <img src={image} alt="computer" />
                    <div>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated  
                    collection of beautiful svg images that you can use completely free and without attribution!</div>
                    <Card.Link href="https://undraw.co/illustrations">Browse Illustrations on unDraw </Card.Link>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
          {/* colors and development */}
          <Row>
            <Col style={{marginLeft:"30px",marginTop:"-100px"}}>
              <Row>
                {this.colorVariants.map(({name,hexa})=>{
                  return(<>
                            <Col lg={5} style={{marginRight:"2rem"}}>
                                <Card style={{backgroundColor:hexa,borderRadius:"10px"}} className="color">
                                  <Card.Body style={{marginTop:"-10px"}}>
                                    <div>{name}</div>
                                    <div>{hexa}</div>
                                  </Card.Body>
                                </Card>
                            </Col>
                        </>)
                })}
              </Row>
            </Col>
            <Col>
                <Card className="box">
                  <Card.Header className="header">Development Approach</Card.Header>
                  <Card.Body>
                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. 
                    Custom CSS classes are used to create custom components and custom utility classes.</p>
                    <p>Before working with this theme,
                     you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default App;
