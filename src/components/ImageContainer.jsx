import React from "react";

function ImageContainer({ images, number }) {
    return (
        <div className="image-container">
            {images.map(image => <img className='image' key={image.id} src={image.url} alt={image.name} />)}
        </div>
    );
}

export default ImageContainer;