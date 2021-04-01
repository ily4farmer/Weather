import React from 'react';
import "./Form.sass"
import search from '../../img/search.svg'

export default function Form(props) {
    return (
        <section className="form">
            <div className="container">
                <form onSubmit={props.weather} className="form-block">
                    <input type="text" name="city" className="form__input" placeholder="Город"/>
                    <button className="form__btn"><img src={search} alt="search"/></button>
                </form>
            </div>
        </section>
    );
}