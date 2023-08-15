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
  let infoObj = ''

  const info = [
    {
      name: 'SDSL: Surprisingly Deep Song Lyrics',
      premise:
        'Who Wants to be a Millionaire-style trivia game, based on song lyrics with hidden depths.',
      tech: 'Static application using HTML, CSS and Javascript, deployed with Surge',
      livelink: <a href="https://sdsl.surge.sh/">Here</a>,
      github: <a href="https://github.com/loewenst/SDSL">Here</a>
    },
    {
      name: 'Unpopular Opinions: Sci-Fi Edition',
      premise:
        'Forum-style app for sharing unconventional opinions about movies and personnel from the sci-fi genre.',
      tech: 'Full-stack application using Python and Django, deployed with Fly.io',
      livelink: <a href="https://unpopular-opinions-scifi.fly.dev/">Here</a>,
      github: <a href="https://github.com/kujo8p/unpopular-opinion">Here</a>
    },
    {
      name: 'Kavanah Forum',
      premise:
        'Niche app allowing members of the praying Jewish community to read or post ideas for intentionality during prayers',
      tech: 'Full-stack application using Django REST Framework and React, deployed with Heroku, Vercel and AWS RDS',
      livelink: <a href="https://kavanah-forum-frontend.vercel.app/">Here</a>,
      github: <a href="https://github.com/loewenst/Kavanah_Forum">Here</a>
    }
  ]

  switch (props.project) {
    case 'SDSL':
      sourceOne = SDSL1
      sourceTwo = SDSL2
      infoObj = info[0]
      break
    case 'UnpopularOpinions':
      sourceOne = UO1
      sourceTwo = UO2
      infoObj = info[1]
      break
    case 'Kavanah':
      sourceOne = One
      sourceTwo = Two
      infoObj = info[2]
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
          <CardTitle>{infoObj.name}</CardTitle>
          <CardText>
            <br />
            Premise: {infoObj.premise}
            <br />
            Technologies: {infoObj.tech}
            <br />
            Live Site {infoObj.livelink} | GitHub {infoObj.github}
          </CardText>
        </CardBody>
      </Card>
    </ModalBody>
  )
}

export default ProjectInfoCard
