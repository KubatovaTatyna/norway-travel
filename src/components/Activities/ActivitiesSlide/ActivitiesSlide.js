import './ActivitiesSlide.css'
const ActivitiesSlide = ({ slide }) => {
  return (
    <div className='ActivitiesSlide'>
      <img src={slide} alt='this is image'/>
      <div className='slideText'>
        <p>Hikking</p>
        <span>230 activites</span>
      </div>
    </div>);
}

export default ActivitiesSlide;