import './Showcase.css'
import gallery_1 from '../../assets/banda_nenatural2.JPG'
import gallery_2 from '../../assets/mulching_cleanup.JPG'
import gallery_3 from '../../assets/patio_driveway-ext_sodding-2.JPG'
import gallery_4 from '../../assets/O&R_Fall-1.JPG'
import white_arrow from '../../assets/black-arrow.png'
const Showcase = () => {
  return (
    <div className='showcase'>
        <div className="gallery">
            <img src={gallery_1} alt='' className='nat-img'/>
            <img src={gallery_2} alt=''/>
            <img src={gallery_3} alt=''/>
            <img src={gallery_4} alt='' className='fall-img'/>
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Showcase