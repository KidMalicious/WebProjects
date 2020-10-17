import React from 'react'
import PropTypes from 'prop-types'

const RateHelp = (value, color) => {
    let html = [];
    for(let i = 0; i < 5; i++){
        let rating = (value - i) >= 1 ? 'fas fa-star' : (value - i) >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star';
        html.push(<span key = {i}><i style = {{color}} className = {rating} ></i></span>);
    }
    return html;
}
const Rating = ({ value, text, color }) => {
    return (
        <div className="rating" >
            {RateHelp(value, color)}
            <span key = "text">
                {text && text}
            </span>
        </div>
    )
}

Rating.defaultProps = {
    color: 'gray',
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}
export default Rating
