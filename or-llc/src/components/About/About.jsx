import './About.css'
import about_img from '../../assets/O&R_Fall-6.JPG'
import play_img from '../../assets/black-arrow.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_img} alt='' className='play-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT COMPANY</h3>
        <h2>No Job Is Too Small</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit 
            sequi perspiciatis et deleniti. Asperiores delectus officia, non a, recusandae 
            cupiditate ab libero architecto, saepe modi nostrum reiciendis at expedita!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit 
            sequi perspiciatis et deleniti. Asperiores delectus officia, non a, recusandae 
            cupiditate ab libero architecto, saepe modi nostrum reiciendis at expedita!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit 
            sequi perspiciatis et deleniti. Asperiores delectus officia, non a, recusandae 
            cupiditate ab libero architecto, saepe modi nostrum reiciendis at expedita!
        </p>
      </div>
    </div>

  )
}

export default About
  
