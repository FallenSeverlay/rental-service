import { FullOffer, OfferList } from "../../types/offer";
import { useParams } from 'react-router-dom';
import { EmptyPage } from "../empty-page/empty-page";
import { CommentForm } from "../../components/comment-form/comment-form";
import { Logo } from "../../components/logo/logo";
import { ReviewList } from '../../components/review-list/review-list';
import { reviews } from '../../mocks/reviews';
import Map from "../../components/map/map";
import { NearbyOffersList } from "../../components/nearby-offers/nearby-offets";

type OfferProps = {
    offers: FullOffer[];
}

function OfferPage({offers}: OfferProps) {
    const { id } = useParams<{ id: string }>();

    const offer = offers.find((o) => String(o.id) === id);

    if (!offer) {
        return <EmptyPage/>;
    }

    const sameCityOffers: OfferList[] = offers
        .filter((o) => o.city.name === offer.city.name && o.id !== offer.id)
        .map((o) => ({
            id: o.id,
            title: o.title,
            type: o.type,
            price: o.price,
            city: o.city,
            location: o.location,
            isFavorite: o.isFavorite,
            isPremium: o.isPremium,
            rating: o.rating,
            previewImage: o.images[0] ?? '',
        }));

    return(
        <main className="page__main page__main--offer">
            <header className="header">
                <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <Logo/>
                    </div>
                    <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item user">
                        <a className="header__nav-link header__nav-link--profile" href="#">
                            <div className="header__avatar-wrapper user__avatar-wrapper">
                            </div>
                            <span className="header__user-name user__name">Myemail@gmail.com</span>
                            <span className="header__favorite-count">3</span>
                        </a>
                        </li>
                        <li className="header__nav-item">
                        <a className="header__nav-link" href="#">
                            <span className="header__signout">Sign out</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </header>
            <section className="offer">
                <div className="offer__gallery-container container">
                    <div className="offer__gallery">
                        {
                            offer.images.map((image, offerIndex) => (
                                <div key={`${offer}-${offerIndex}`} className="offer__image-wrapper">
                                    <img className="offer__image" src={image} alt="Photo studio"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="offer__container container">
                    <div className="offer__wrapper">
                        {offer.isPremium ? (
                            <div className="offer__mark">
                                <span>Premium</span>
                            </div>
                        ) : null}
                        <div className="offer__name-wrapper">
                            <h1 className="offer__name">
                                {offer.title}
                            </h1>
                            <button className="offer__bookmark-button button" type="button">
                            <svg className="offer__bookmark-icon" width="31" height="33">
                                <use href="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">To bookmarks</span>
                            </button>
                        </div>
                        <div className="offer__rating rating">
                            <div className="offer__stars rating__stars">
                            <span style={{width: `${(offer.rating / 5) * 100}%` }}></span>
                            <span className="visually-hidden">Rating</span>
                            </div>
                            <span className="offer__rating-value rating__value">{offer.rating}</span>
                        </div>
                        <ul className="offer__features">
                            <li className="offer__feature offer__feature--entire">
                                {offer.type}
                            </li>
                            <li className="offer__feature offer__feature--bedrooms">
                                {offer.bedrooms} Bedrooms
                            </li>
                            <li className="offer__feature offer__feature--adults">
                                Max {offer.maxAdults} adults
                            </li>
                        </ul>
                        <div className="offer__price">
                            <b className="offer__price-value">&euro;{offer.price}</b>
                            <span className="offer__price-text">&nbsp;night</span>
                        </div>
                        <div className="offer__inside">
                        <h2 className="offer__inside-title">What&apos;s inside</h2>
                        <ul className="offer__inside-list">
                            {offer.goods.map((item) => (
                            <li key={item} className="offer__inside-item">
                                {item}
                            </li>
                            ))}
                        </ul>
                        </div>
                        <div className="offer__host">
                            <h2 className="offer__host-title">Meet the host</h2>
                            <div className="offer__host-user user">
                            <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                                <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                            </div>
                            <span className="offer__user-name">
                                {offer.host.name}
                            </span>
                            {offer.host.isPro ? (
                                <span className="offer__user-status">
                                    Pro
                                </span>
                            ) : null}
                            </div>
                            <div className="offer__description">
                            <p className="offer__text">
                                {offer.description}
                            </p>
                            </div>
                        </div>
                        <section className="offer__reviews reviews">
                            <ul className="reviews__list">
                                <ReviewList reviews={reviews} />
                            </ul>
                            <CommentForm onSubmit={() => {}} />
                        </section>
                    </div>
                </div>
                <section className="offer__map map">
                    <Map
                        city={offer.city}
                        offers={sameCityOffers}
                    />
                </section>
            </section>
            <div className="container">
                <NearbyOffersList offers={sameCityOffers}/>
            </div>
        </main>
    );
}

export { OfferPage };