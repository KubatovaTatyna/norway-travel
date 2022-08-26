import classes from './Hotel.module.css';

const Hotel = ({ hotel, star }) => {
  return (
    <div className={classes.Hotel}>
      <div className={classes.Card}>
        <img src={hotel} className={classes.CardImage} alt='this is image'/>
        <div className={classes.CardText}>
          <div>
            <h2>Reine</h2>
            <p>$720</p>
          </div>
          <div className={classes.Stars}>
            <img src={star}  alt='this is image'/>
            <img src={star}  alt='this is image'/>
            <img src={star}  alt='this is image'/>
            <img src={star}  alt='this is image'/>
            <img src={star}  alt='this is image'/>
          </div>
        </div>
      </div>
    </div> );
}

export default Hotel;