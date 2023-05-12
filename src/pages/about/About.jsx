import React from 'react'
import './about.scss'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'
import  Blast  from '../../components/BlastAnimation/Blast'
import Cards from '../../components/skillsCards/Cards'
import myCV from '../../assets/myCV.pdf'

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
    <Reveal>
      <div className="fake-big">About</div>
    </Reveal>
    <div className="section-about-wrapper section__padding">
      <article className="section-about-description">
        <div>
          <h2 arial-aria-label="About and skills">
            <Blast
              letterClass={letterClass}
              arrayStr={[
                'A',
                'b',
                'o',
                'u',
                't',
                '',
                '&',
                '',
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
              ]}
              indexLetter={15}
            />
          </h2>
          <Fade bottom>
            <p>
              I’m an ambitious Front-End Developer who's passionate about
              coding and always keen to work with new technologies & loves building cool UI effects, dynamic webpages
              with amazing animations and creating intuitive, dynamic user
              experiences.I am always eager to explore new opportunities around the world 
that can help me enhance my skills and give me the chance to collaborate with
 other programmers. 
            </p>
          </Fade>
          <Fade bottom>
            <p>
             
Apart from that, I have a keen interest in football, physics, and astronomy. If you share my passion for football,
 we should definitely meet up sometime and discuss how incredible Real Madrid is.
            </p>
          </Fade>
          <Fade bottom>
            <p>
              If I could say one of the most interesting things about me, it's
              the fact that I'm always ready for any challenges that comes 
              my way. Here's my CV below for more details.
            </p>
          </Fade>
          <Fade left>
              <a
                style={{ marginTop: '2rem' }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          
        </div>
      </article>
      {/* programming language cards */}
      <Cards />
    </div>
  </>
  )
}

export default About
