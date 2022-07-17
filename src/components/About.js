import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
        <h4>A project by James Kim.</h4>
        <h4> Built on 7/16/22 in order to learn React.</h4>
        <br></br>
        <h4>Special Thanks to Brad Traversy.</h4>
        <Link to="/">Go Back</Link>
    </div>
  )
}

export default About