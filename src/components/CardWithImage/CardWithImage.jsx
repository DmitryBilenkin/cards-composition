import './CardWithImage.css'
import TextPartOfCard from '../TextPartOfCard'

function CardWithImage(props) {
  return (
    <>
      <img className='card-img' src={props.img} alt='any'/>
      <TextPartOfCard title={props.title} text={props.text}/>
    </>
  )
}

export default CardWithImage
