import React from 'react';
import "./City.sass"
import sunset from '../../img/sunset.svg'
import sunrise from '../../img/sunrise.svg'
import wind from '../../img/wind.svg'
import hum from '../../img/hum.svg'

export default function City(props) {
    return (
        <section className="city">
            <div className="container">

                <div className="city__bg"></div>
                <div className="city-block">
                    <div className="city__header">
                        <h3 className="city__name">{props.name}</h3>
                        <h4 className="city__country">{props.country}</h4>
                    </div>
                    <h2 className="city__temp">{props.temp}°</h2>
                    <div className="city__difference">
                        <span className="city__min">max: {props.tempMax}°</span>
                        <span className="city__max">min: {props.tempMin}°</span>
                    </div>
                    <p className="city__felt">felt: {props.feedsLike}°</p>
                    <div className="city__footer">
                        <ul className="city__list">
                            <li className="city__item"><img src={wind} className="city__item-img" alt="sunset"/><span> wind {props.wind}km/h</span></li>
                            <li className="city__item"><img src={hum} className="city__item-img" alt="sunrise"/><span> hum {props.hum}%</span></li>
                        </ul>
                        <ul className="city__list">
                            <li className="city__item"><img src={sunset}  className="city__item-img" alt="sunset"/>{props.sunset}</li>
                            <li className="city__item"><img src={sunrise} className="city__item-img" alt="sunrise"/> {props.sunrise}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}