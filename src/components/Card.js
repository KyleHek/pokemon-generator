import React from "react";
import "./Card.css";

const Card = ({ hp, imgSrc, name, attack, defense, speed, types, themeColor, themeColor2 }) => {

    const cardStyle = {
        background: `radial-gradient(circle at 50% 0%, ${themeColor} 40%, #ffffff 0%)`,
        width: "350px",
        padding: "20px",
    };

    const typeStyle = {
        background: themeColor,
        padding: "5px 10px 5px 10px",
        borderRadius: "10px",
        color: "#ffffff",
    }

    const typeStyle2 = {
        background: themeColor2,
        padding: "5px 10px 5px 10px",
        borderRadius: "10px",
        color: "#ffffff",
    }

    return(
        // this is the card styles
        <div className="bg-white dib br3 ma2 bw2 shadow-5" style={cardStyle}>
            {/* this is the styles of whats on the card */}
            <p className="hp">
                <span>HP </span>
                {hp}
            </p>
            <img className='image' alt='pokemon' src={imgSrc}/>
            <h2 className="name">{name}</h2>
            <div className="types">
                {types.map((type, index) => (
                <span key={index} style={index === 0 ? typeStyle : typeStyle2}>
                    {type}
                </span>
                ))}
            </div>
            <div className="stats">
                <div>
                    <h3>{attack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>{defense}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>{speed}</h3>
                    <p>Speed</p>
                </div>
            </div>
        </div>
    );
}

export default Card;