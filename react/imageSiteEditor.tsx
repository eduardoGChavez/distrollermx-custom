import React from 'react';

const MyComponent: StorefrontFunctionComponent = ({ alto, image }) => {
    return (
        <div>
            <h1>Hola mundo</h1>
            <h2>ALTO: {alto}</h2>
            <h2>Imagen:</h2>
            <h2>IMAGE: {image}</h2>
            {/* <img src={image} alt="" /> */}
            {/* {console.log(image)} */}
        </div>
    );
}

export default MyComponent;

MyComponent.schema = {
    title: 'Table',
    description: 'Table that show the product size',
    type: 'object',
    properties: {
        alto: {
            title: 'Height of content',
            description: "The first column of the table, usually the name of the property",
            type: 'string',
            default: "1"
        },
        image: {
            title: 'Image wallpaper',
            description: "Example",
            type: 'element'
        }
    },
}
