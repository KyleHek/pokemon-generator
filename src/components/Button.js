import React from "react";
import './Button.css';

const Button = ({generate}) => {
    return (
        <div>
            <button className="grow f6 br2 ph3 pv2 mb2 dib white bg-black" type="button" onClick={generate}>
                Generate
            </button>
        </div>
    )
}

export default Button;