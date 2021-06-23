import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt={props.monster.username}
      src={`https://robohash.org/${props.monster.id}?set=set2`}
    />
    <h3>{props.monster.name}</h3>
    <p>{props.monster.email}</p>
  </div>
);
