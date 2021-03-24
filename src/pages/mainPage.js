// import aboutMe from "../components/cards/aboutMeCard"
// import projectMe from "../components/cards/projectsCard"
// import contactMe from "../components/cards/contactCard"
import CardGroup from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Button';


function mainPage () {
return (
    <CardGroup>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>About Me!</Card.Title>
    <Card.Text>
     Click here to learn a bit about my background
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Projects</Card.Title>
    <Card.Text>
     Click here to see some projects I worked on in the past! 
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Contact me</Card.Title>
    <Card.Text>
     Click here to find out how to contact me!
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    </CardGroup>

)

}
export default mainPage