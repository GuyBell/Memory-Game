export default function FCcard({ card, cardClick, id }) {
  const cardClass = card.stat ? " active " + card.stat : "" 
  
  return (
    <div className={"card_div"+ cardClass} onClick={() => cardClick(id)}>
      <img src={card.img} />
    </div>
  )
}
