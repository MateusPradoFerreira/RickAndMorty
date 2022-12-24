import { Link } from "react-router-dom";

function Card(props) {
    return (
        <div className="c-card">
            <Link to={`/characters/${props.data.id}`}>
                <img className="c-card__img" src={props.data.image} alt='img' />
            </Link>
            <div className="c-card__box">
                <h2 className="c-card__name">{props.data.name}</h2>
                <h2 className="c-card__stats">#{props.data.id < 10 ? '0' + props.data.id : props.data.id} | {props.data.species}</h2>
            </div>
        </div>
    );
}

export default Card;