
function TextPartOfCard(props) {
  return (
    <>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text'>{props.text}</p>
    </>
  )
}

export default TextPartOfCard;


