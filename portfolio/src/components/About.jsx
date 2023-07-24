import { Card, CardGroup, CardBody } from 'reactstrap'

const About = () => {
  return (
    <div style={{ backgroundColor: 'teal', height: '30vh' }}>
      <CardGroup
        style={{
          marginLeft: '10vh',
          marginRight: '10vh',
          paddingTop: '10vh'
        }}
      >
        <Card>
          <CardBody>
            Tech Stacks
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
