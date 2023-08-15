import * as AiIcons from 'react-icons/ai'

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'teal', height: '35vh' }} id="contact">
      <br />
      <br />
      <h3 className="sectionHeader">Contact</h3>
      <br />
      <p className="sectionText">
        <a
          href="mailto:loewenst@gmail.com"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          <AiIcons.AiOutlineMail size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-z-loewenstein/"
          style={{
            textDecoration: 'none',
            color: 'white',
            paddingLeft: '10px'
          }}
        >
          <AiIcons.AiOutlineLinkedin size={50} />
        </a>
      </p>
    </div>
  )
}

export default Contact
