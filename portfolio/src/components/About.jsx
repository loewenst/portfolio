import { Card, CardGroup, CardBody } from 'reactstrap'

const About = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'teal', height: '35vh' }}>
        <br />
        <h5 className="sectionHeader">About Me</h5>
        <p className="sectionText">Some intro text about me.</p>
      </div>
      <CardGroup
        style={{
          marginLeft: '10vh',
          marginRight: '10vh',
          marginTop: '-100px',
          paddingTop: '30px'
        }}
      >
        <Card>
          <CardBody>
            Tech Stack
            <br />
          </CardBody>
        </Card>
        <Card>
          <CardBody>Values</CardBody>
        </Card>
        <Card>
          <CardBody>Background</CardBody>
        </Card>
      </CardGroup>
    </div>
  )
}

export default About
