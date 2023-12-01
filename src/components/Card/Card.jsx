import './Card.css'
function Card(props) {
  return (
   <div className="card-content">
        {props.children}
        <button type='submit'>Go somwhere</button>
  </div>
  )
}

export default Card;
