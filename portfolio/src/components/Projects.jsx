import { useState } from 'react'
import { Card, Modal } from 'reactstrap'
import ProjectInfoCard from './ProjectInfoCard'

const Projects = () => {
  //state variables
  const [modal, setModal] = useState(false)
  const [project, setProject] = useState('')
  const toggleModal = (str) => {
    setProject(str)
    setModal(!modal)
  }

  //style for project cards
  const cardStyle = (link) => {
    return {
      height: '18vw',
      width: '28vw',
      minHeight: '225px',
      minWidth: '350px',
      margin: '15px',
      borderRadius: '15px',
      border: 'none',
      backgroundImage: `url(${link})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      cursor: 'pointer'
    }
  }

  return (
    <div id="projects">
      <div style={{ backgroundColor: 'teal', height: '35vh' }}>
        <br />
        <br />
        <h3 className="sectionHeader">Recent Projects</h3>
        <p className="sectionText"></p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '-120px'
          }}
        >
          <Card
            onClick={() => toggleModal('SDSL')}
            style={cardStyle('https://i.imgur.com/b4m7vyE.jpg')}
          ></Card>
          <Card
            onClick={() => toggleModal('UnpopularOpinions')}
            style={cardStyle('https://i.imgur.com/gfEMvpH.png')}
          ></Card>
          <Card
            onClick={() => toggleModal('Kavanah')}
            style={cardStyle('https://i.imgur.com/u3uXgZe.png')}
          ></Card>
        </div>
        <Modal isOpen={modal} toggle={() => toggleModal('')} size="lg">
          <ProjectInfoCard project={project} />
        </Modal>
      </div>
    </div>
  )
}

export default Projects
