import './Cards.css'

function Cards(props) {
  return (
    <div className='cards-container'>
        {props.children}
    </div>
  )
}

export default Cards
