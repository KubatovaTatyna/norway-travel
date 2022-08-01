import './AboutUs.css';
import aboutImg from '../../assets/aboutImg.png';

const AboutUs = () => {
  return ( <div className="AboutUs">
    <div className='aboutHeader'>
      <span>About Us</span>
      <h1>Our Philosophy</h1>
    </div>
    <div className='aboutContainer'>
      <div className='aboutImage'>
        <img src={aboutImg} />
      </div>
      <div className='aboutText'>
        <ol>
          <li>
            <h3>Sustainable</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, ac tristique dolor. Aliquam nulla risus,</p>
          </li>
          <li>
            <h3>Fair and Share</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, ac tristique dolor. Aliquam nulla risus,</p>
          </li>
          <li>
            <h3>Experience</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, ac tristique dolor. Aliquam nulla risus,</p>
          </li>
        </ol>
      </div>
    </div>
  </div> );
}

export default AboutUs;