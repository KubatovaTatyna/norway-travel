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
      <img src={microsoft}/>
      <img src={magento}/>
      <img src={lakehouse}/>
    </div>
  </div>);
}

export default Partners;