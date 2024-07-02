import PropTypes from 'prop-types';

export default function Section(props) {
  return (
    <div className="box-Container" style={{
      backgroundColor: props.primarycolor
    }}>
      <img src={props.Img} alt="icon" />
      <div>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
      </div>
      <div className='button'><button className={props.title}>Learn More</button></div>
    </div>
  );
}

Section.propTypes = {
  Img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  primarycolor: PropTypes.string.isRequired,
};