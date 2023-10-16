import * as FaIcons from 'react-icons/fa'

const Banner = () => {
  return (
    <div id="banner">
      <div id="leftSide">
        <h1>Hi, I'm Daniel</h1>
        <p style={{ color: 'grey' }}>
          I'm a Full Stack Web Developer who loves strategizing and planning,
          solving problems, being a thought partner, and losing myself in my
          work.
        </p>
        <br />
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
