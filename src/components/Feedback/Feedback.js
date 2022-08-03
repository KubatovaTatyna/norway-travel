import './Feedback.css';
import Partners from './Partners/Partners';
import person from '../../assets/person.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'
import Blockqoute from './Blockqoute/Blockqoute';

const Feedback = () => {
  return (<div className="Feedback">
    <Partners />
    <div className='blockqouteContainer'>
      <Blockqoute person={person} name="Jane Cooper" work="CEO, ABC Corporation"/>
      <Blockqoute person={person2} name='Alan Jackson' work='CEO, Travelers Community'/>
      <Blockqoute person={person3} name='Jane Cooper' work='CEO, Go Travel'/>
    </div>
  </div>);
}

export default Feedback;