import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ModalBody,
  UncontrolledCarousel
} from 'reactstrap'

const ProjectInfoCard = (props) => {
  return (
    <ModalBody>
      <Card>
        <UncontrolledCarousel
          items={[
            {
              key: 1,
              src: 'https://picsum.photos/id/123/1200/600'
            },
            {
              key: 2,
              src: 'https://picsum.photos/id/456/1200/600'
            },
            {
              key: 3,
              src: 'https://picsum.photos/id/678/1200/600'
            }
          ]}
        />
        <CardBody>
          <CardTitle>Project I (will be prop)</CardTitle>
          <CardText>Technical Info (will be prop)</CardText>
        </CardBody>
      </Card>
    </ModalBody>
  )
}

export default ProjectInfoCard
