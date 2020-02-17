import React from 'react';
import './Brand.scss';

interface IProps {
    brandName: string
    hasImage?: boolean
    children?: JSX.Element
}

const uppercaseFirstLetter = (string: string) => string.charAt(0).toLocaleUpperCase() + string.slice(1);

function Brand({brandName, hasImage = false, children}: IProps) {
    return (
        <div className="Brand" title={uppercaseFirstLetter(brandName)}>
            <div className="brand">
                {hasImage && <img src={require(`./../assets/work/${brandName}.png`)}/>}
                {children}
            </div>
        </div>
    );
}

export default Brand;
