import { useState } from 'react'
import { Card, Modal } from 'reactstrap'
import ProjectInfoCard from './ProjectInfoCard'

const Projects = () => {
  const [modal, setModal] = useState(false)
  const [project, setProject] = useState('')
  const toggleModal = (str) => {
    setProject(str)
    setModal(!modal)
    console.log(project)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <p>Recent Projects</p>
      <p>
        Here are some projects that I've worked on recently. Click for more
        detail.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card
          onClick={() => toggleModal('SDSL')}
          style={{
            height: '18vw',
            width: '28vw',
            margin: '15px',
            borderRadius: '15px',
            border: 'none',
            backgroundImage: 'url("https://i.imgur.com/b4m7vyE.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></Card>
        <Card
          onClick={() => toggleModal('UnpopularOpinions')}
          style={{
            height: '18vw',
            width: '28vw',
            margin: '15px',
            borderRadius: '15px',
            border: 'none',
            backgroundImage: 'url("https://i.imgur.com/gfEMvpH.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></Card>
        <Card
          onClick={() => toggleModal('Kavanah')}
          style={{
            height: '18vw',
            width: '28vw',
            margin: '15px',
            borderRadius: '15px',
            border: 'none',
            backgroundImage: 'url("https://i.imgur.com/u3uXgZe.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></Card>
      </div>
      <Modal isOpen={modal} toggle={() => toggleModal('')} size="lg">
        <ProjectInfoCard project={project} />
      </Modal>
    </div>
  )
}

export default Projects
