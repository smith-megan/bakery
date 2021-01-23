import React, { useState } from "react";
import axios from "axios";
import "./order.css";

function Order() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });

    const deliverLetter = () => {
        let letter = document.getElementById("letter");
        let position = 2;
        let timer = setInterval(frame, 50);
        function frame() {
            if (position === 110) {
                clearInterval(timer);
            } else {
                letter.style.left = position + '%';
                position += 10
            }
        }
    }

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/f/xeqprzag",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks! We'll chat more soon! Keep an eye on your inbox.", form)
                deliverLetter();
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };

    const cupCakes = {
        type: "cupcakes",
        flavors: ["Vanilla", "Chocolate", "Raspberry", "Strawberry", "Orange"]
    }

    const cookies = {
        type: "cookies",
        flavors: ["Chocolate", "Vanilla", "Snickerdoodle", "Macaroons", "Peanutbutter Chocolate"]
    }

    const frosting = {
        type: "frosting",
        flavors: ["Chocolate", "Vanilla", "Vanilla Swirl", "Strawberry"]
    }

    const candies = {
        type: "candies",
        flavors: ["Toffee", "Fudge", "Cake Bites", "Peanutbutter Truffles", "Lollipops"]
    }

    const optionsForForm = obj => {
        let list = []
        let flavor = obj.flavors
        flavor.forEach(
            (item, i) => {
                list.push(<div key={item + "-" + i}>
                    <input id={item} type="checkbox" name={item + "-" + obj.type} />
                    <label htmlFor="message">{item}</label>
                </div>)
            }
        )
        return <div className={obj.type}>{list}</div>
    }

    return (
        <div id="Order">
            <div className="order-banner"><h1 className="order-text-title">Let's get some...</h1></div>
            <div className="body">
                <div className="handle-overflow">
                    <div className="form-div" id="letter">
                        <form className="actual-form" onSubmit={handleOnSubmit}>
                            <div className="cupcakes-header">
                                <div className="cupcake-image" ></div>
                                <h2>Cupcakes</h2>
                                {optionsForForm(cupCakes)}
                                <h3>frosted with...</h3>
                                {optionsForForm(frosting)}
                            </div>

                            <div className="cookies-header">
                                <div className="cookie-image" />
                                <h2>Cookies</h2>
                                {optionsForForm(cookies)}
                            </div>

                            <div className="candies-header">
                                <div className="sweets-image" />
                                <h2>Candies</h2>
                                {optionsForForm(candies)}
                            </div>

                            <div className="additional-info">
                                <div className="stamp"></div>
                                <label htmlFor="message">Extra Notes:</label>
                                <textarea id="message" name="message" placeholder="Colors, Themes, Details, or Ideas you want to chat about!"></textarea>

                                <div>
                                    <label htmlFor="name">From:</label>
                                    <input id="name" type="name" name="name" placeholder="First Last Name" required />
                                </div>

                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" type="email" name="email" placeholder="email@emailservice.com" required />
                                </div>
                                <button className="contact-button" type="submit" disabled={serverState.submitting}>
                                    Submit
                        </button>
                            </div>
                        </form>
                    </div>

                    {serverState.status && (
                        <p className={!serverState.status.ok ? "errorMsg" : ""}>
                            {serverState.status.msg}
                        </p>
                    )}
                </div>
                <div className="order-mailbox" />
            </div>
        </div >
    );
};

export default Order;