import { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/black-arrow.png'
import back_icon from '../../assets/black-arrow.png'
import user1 from '../../assets/O&R_Logo_w_number.png'
import user2 from '../../assets/O&R_Logo_w_number.png'
import user3 from '../../assets/O&R_Logo_w_number.png'
import user4 from '../../assets/O&R_Logo_w_number.png'
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt=''/>
                        <div>
                            <h3>John Doe</h3>
                            <span>Waltham, Mass</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi omnis perspiciatis placeat eos, doloremque 
                        distinctio voluptas corrupti autem quia explicabo tenetur, 
                        perferendis odio aut consequatur iusto dolorum adipisci aspernatur ab!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt=''/>
                        <div>
                            <h3>John Doe</h3>
                            <span>Waltham, Mass</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi omnis perspiciatis placeat eos, doloremque 
                        distinctio voluptas corrupti autem quia explicabo tenetur, 
                        perferendis odio aut consequatur iusto dolorum adipisci aspernatur ab!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt=''/>
                        <div>
                            <h3>John Doe</h3>
                            <span>Waltham, Mass</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi omnis perspiciatis placeat eos, doloremque 
                        distinctio voluptas corrupti autem quia explicabo tenetur, 
                        perferendis odio aut consequatur iusto dolorum adipisci aspernatur ab!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt=''/>
                        <div>
                            <h3>John Doe</h3>
                            <span>Waltham, Mass</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi omnis perspiciatis placeat eos, doloremque 
                        distinctio voluptas corrupti autem quia explicabo tenetur, 
                        perferendis odio aut consequatur iusto dolorum adipisci aspernatur ab!</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
