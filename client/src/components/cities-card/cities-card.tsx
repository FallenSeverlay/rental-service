import { AppRoute } from "../../const";
import { Link } from "react-router-dom";

type CitiesCardProp = {
    id: string;
    title: string;
    type: string;
    price: number;
    isPremium: boolean;
    previewImage: string;
    rating: number;
    onHover?: (id: string) => void;
};

function CitiesCard({id, title, type, price, previewImage, isPremium, rating, onHover }: CitiesCardProp) {
    return(
        <article className="cities__card place-card" onMouseOver={() => onHover?.(id)} onMouseOut={() => onHover?.('')}>
            <div className="place-card__mark">
                <span>Premium: {isPremium}</span>
            </div>
            <div className="cities__image-wrapper place-card__image-wrapper">
                <Link to={ `${AppRoute.Offer}/${id}` }>
                    <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
                </Link>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use href="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                </button>
                </div>
                <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                    <span style={{width: `${(rating / 5) * 100}%` }}></span>
                    <span className="visually-hidden">{rating}</span>
                </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
                </h2>
                <p className="place-card__type">{type}</p>
            </div>
        </article>
    );
}

export { CitiesCard };