import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Button';
function projectMe () {

    return (
        <div>
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

</div>
)
}

export default projectMe