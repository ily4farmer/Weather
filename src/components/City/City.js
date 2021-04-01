import React from 'react';
import "./City.sass"

export default function City(props) {
    return (
        <section className="city">
            <div className="container">
                <div className="city-block">
                    <div className="city__header">
                        <h2 className="city__name">Город: {props.name}</h2>
                        <h3 className="city__country">Страна: {props.country}</h3>
                    </div>
                    <ul>
                        <li>Температура: {props.temp}</li>
                        <li>Ощущается как: {props.feedsLike}</li>
                        <li>Максимальная температура за день: {props.tempMax}</li>
                        <li>Минимальная температура за день: {props.tempMin}</li>
                        <li>Время восхода: {props.sunrise}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}