import './Showcase.css'
import gallery_1 from '../../assets/banda_nenatural1.JPG'
import gallery_2 from '../../assets/mulching_cleanup.JPG'
import gallery_3 from '../../assets/patio_driveway-ext_sodding-2.JPG'
import gallery_4 from '../../assets/O&R_Fall-1.JPG'
const Showcase = () => {
  return (
    <div className='showcase'>
        <div className="gallery">
            <img src={gallery_1} alt=''/>
            <img src={gallery_2} alt=''/>
            <img src={gallery_3} alt=''/>
            <img src={gallery_4} alt=''/>
        </div>
    </div>
  )
}

export default Showcase