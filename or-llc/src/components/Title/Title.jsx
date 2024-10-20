import './Title.css'
import PropTypes from 'prop-types'

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

Title.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default Title
