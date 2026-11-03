const Card = (props) => {
  return (
    <div className="card">
      <div className="details">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button>Click Me</button>
      </div>
    </div>
  )
}

export default Card