import * as FaIcons from 'react-icons/fa'

const Banner = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: '600px',
        alignItems: 'center',
        margin: '0 auto',
        paddingTop: '60px',
        paddingBottom: '60px'
      }}
    >
      <div id="leftSide">
        <h1>Hi, I'm Daniel</h1>
        <p style={{ color: 'grey' }}>
          I'm a FullStack Web Developer who loves solving problems, being a team
          player and finding ways to help.
        </p>
        <br />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <a
            href="https://github.com/loewenst"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <FaIcons.FaGithubSquare /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-z-loewenstein/"
            style={{
              textDecoration: 'none',
              color: 'black',
              paddingLeft: '10px'
            }}
          >
            <FaIcons.FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
      <div id="rightSide">
        <img
          src="https://i.imgur.com/LBG2nzQ.jpg"
          alt=""
          style={{ borderRadius: '50%', border: '5px teal solid' }}
        />
      </div>
    </div>
  )
}

export default Banner
