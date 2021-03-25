import aboutMe from "../components/cards/aboutMeCard";
import projectMe from "../components/cards/projectsCard";
import contactMe from "../components/cards/contactCard";
import CardGroup from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Button';


function mainPage () {
return (
    // <CardGroup>
    <div>
   <aboutMe/>
   <projectMe />
   <contactMe />
   </div>
    // </CardGroup>

)

}
export default mainPage