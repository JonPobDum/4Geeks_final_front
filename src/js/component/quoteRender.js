import React from "react"
import "../../styles/credencial.css";

const QuoteRender = ({author, text}) => {
    return (
    <div className="quote">
        <h5>Day phrase</h5>
        <p className="text_api">{text}</p>
        <p className="text_api">By: {author}</p>
    </div>)
}

export { QuoteRender }