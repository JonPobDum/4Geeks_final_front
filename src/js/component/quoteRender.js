import React from "react"

const QuoteRender = ({author, text}) => {
    return (
    <div className="quote">
        <p>{text}</p>
        <p>By: {author}</p>
    </div>)
}

export { QuoteRender }