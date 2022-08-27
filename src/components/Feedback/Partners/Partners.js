import './Partners.css';
import microsoft from '../../../assets/microsoft.png';
import magento from '../../../assets/magento.png';
import lakehouse from '../../../assets/lakehouse.png';
const Partners = () => {
  return (<div className="Partners">
    <div className='partnersHeader'>
      <span>NETWORK</span>
      <h1>Our Partners</h1>
    </div>
    <div className='partnersLogos'>
      <img src={microsoft}  alt='alt'/>
      <img src={magento}  alt='alt'/>
      <img src={lakehouse}  alt='alt'/>
    </div>
  </div>);
}

export default Partners;