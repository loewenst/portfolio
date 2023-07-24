import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ModalBody,
  UncontrolledCarousel
} from 'reactstrap'
import One from '../screenshots/Kavanah/One.png'
import Two from '../screenshots/Kavanah/Two.png'
import UO1 from '../screenshots/UnpopularOpinions/UO1.png'
import UO2 from '../screenshots/UnpopularOpinions/UO2.png'
import SDSL1 from '../screenshots/SDSL/SDSL1.png'
import SDSL2 from '../screenshots/SDSL/SDSL2.png'

const ProjectInfoCard = (props) => {
  let sourceOne = ''
  let sourceTwo = ''
  switch (props.project) {
    case 'SDSL':
      sourceOne = SDSL1
      sourceTwo = SDSL2
      break
    case 'UnpopularOpinions':
      sourceOne = UO1
      sourceTwo = UO2
      break
    case 'Kavanah':
      sourceOne = One
      sourceTwo = Two
      break
  }

  return (
    <ModalBody>
      <Card>
        <div
          style={{
            height: '36vw',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <UncontrolledCarousel
            indicators={false}
            items={[
              {
                caption: '',
                key: 1,
                src: sourceOne
              },
              {
                caption: '',
                key: 2,
                src: sourceTwo
              }
            ]}
          />
        </div>
        <CardBody>
          <CardTitle>Project I (will be prop)</CardTitle>
          <CardText>Technical Info (will be prop)</CardText>
        </CardBody>
      </Card>
    </ModalBody>
  )
}

export default ProjectInfoCard
