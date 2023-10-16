import { Card, CardGroup, CardBody } from 'reactstrap'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'

const About = () => {
  return (
    <div id="about-me">
      <div style={{ backgroundColor: 'teal', height: '35vh' }}>
        <br />
        <br />
        <h3 className="sectionHeader">About Me</h3>
        <p className="sectionText"></p>
      </div>
      <CardGroup
        style={{
          marginLeft: '10vh',
          marginRight: '10vh',
          marginTop: '-120px',
          paddingTop: '30px'
        }}
      >
        <Card>
          <CardBody style={{ textAlign: 'center' }}>
            <br />
            <BsIcons.BsStack size={70} />
            <br />
            <br />
            <span style={{ fontSize: 'large', fontWeight: 'bold' }}>
              Full-Stack Development
            </span>
            <br />
            <br />
            I'm always learning and growing, so expect this list to change. For
            now, here are the technologies I use:
            <br />
            <br />
            <br />
            <span style={{ color: 'grey' }}>Languages and Frameworks</span>
            <br />
            <br />
            CSS3
            <br />
            Django
            <br />
            Django REST Framework
            <br />
            HTML5
            <br />
            JavaScript
            <br />
            Express
            <br />
            Node
            <br />
            Python
            <br />
            React
            <br />
            Reactstrap
            <br />
            <br />
            <br />
            <span style={{ color: 'grey' }}>Databases</span>
            <br />
            <br />
            MongoDB
            <br />
            PostgresQL
            <br />
            <br />
          </CardBody>
        </Card>
        <Card>
          <CardBody style={{ textAlign: 'center' }}>
            <br />
            <BsIcons.BsFillClipboard2HeartFill size={70} />
            <br />
            <br />
            <span style={{ fontSize: 'large', fontWeight: 'bold' }}>
              Principles & Values
            </span>
            <br />
            <br />
            Anyone who knows me can tell you, you don't know me if you don't
            know the values I hold. Here are some that are most relevant to a
            professional context:
            <br />
            <br />
            <br />
            <span style={{ color: 'grey' }}>Values</span>
            <br />
            <br />
            Accountability
            <br />
            Alignment
            <br />
            Communication
            <br />
            Commitment to the Bigger Picture
            <br />
            Egolessness
            <br />
            Respect
            <br />
            <br />
            <br />
            <span style={{ color: 'grey' }}>Principles</span>
            <br />
            <br />
            Deep Work
            <br />
            Flow
            <br />
            Playing to Strengths
            <br />
            Positivity
            <br />
            <br />
          </CardBody>
        </Card>
        <Card>
          <CardBody style={{ textAlign: 'center' }}>
            <br />
            <BiIcons.BiSolidRewindCircle size={70} />
            <br />
            <br />
            <span style={{ fontSize: 'large', fontWeight: 'bold' }}>
              Background
            </span>
            <br />
            <br />
            Here are some of the highlights of my academic and professional
            career, B.C. (before coding).
            <br />
            <br />
            <br />
            <span style={{ color: 'grey' }}>Academic Background</span>
            <br />
            <br />
            PhD, Education and Jewish Studies
            <br />
            -New York University <br /> MS, Jewish Education <br />
            -Yeshiva University <br />
            BA, Hebrew Language <br />
            -Yeshiva University <br />
            <br />
            <br />
            <span style={{ color: 'grey' }}>Professional Background</span>
            <br />
            <br />
            Senior Scholar <br />
            Content Writer <br />
            -Aleph Beta <br />
            <br />
            English Teacher <br />
            Creative Writing Teacher <br />
            Poetry Slam Coach <br />
            -Midreshet Shalhevet High School <br />
            <br />
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  )
}

export default About
