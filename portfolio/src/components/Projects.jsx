import { useState } from 'react'
import { Card, Modal } from 'reactstrap'
import ProjectInfoCard from './ProjectInfoCard'

const Projects = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)

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
          onClick={toggleModal}
          style={{
            height: '18vw',
            width: '28vw',
            margin: '15px',
            borderRadius: '15px',
            border: 'none',
            backgroundImage: 'url("https://i.imgur.com/c8usHtB.jpg?2")'
          }}
        ></Card>
        <Card
          onClick={toggleModal}
          style={{
            height: '18vw',
            width: '28vw',
            margin: '15px',
            borderRadius: '15px',
            border: 'none',
            backgroundImage: 'url("https://i.imgur.com/c8usHtB.jpg?2")'
          }}
        ></Card>
        <Card
          onClick={toggleModal}
          style={{
            height: '18vw',
            width: '28vw',
            margin: '15px',
            borderRadius: '15px',
            border: 'none',
            backgroundImage: 'url("https://i.imgur.com/c8usHtB.jpg?2")'
          }}
        ></Card>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ProjectInfoCard />
      </Modal>
    </div>
  )
}

export default Projects
