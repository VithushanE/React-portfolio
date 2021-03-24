import Card from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
function contactMe () {

    return (
        <div>
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
</div>
)
}

export default contactMe