import './CardWithoutImage.css';
import TextPartOfCard from '../TextPartOfCard';

 function CardWithoutImage(props) {
  return (
    <>
      <TextPartOfCard title={props.title} text={props.text}/>
    </>
  )
}

export default CardWithoutImage;
