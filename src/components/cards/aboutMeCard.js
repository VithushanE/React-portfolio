
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Button';

function aboutMe () {

  return (  
<div>
    

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



</div>
)
}

export default aboutMe