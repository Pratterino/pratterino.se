import React from 'react';
import './Brand.scss';

interface IProps {
    brandName: string
}

function Brand({brandName}: IProps) {
    return (
        <div className="Brand">
            <div className="brand">
                <img src={require(`./../src/assets/work/${brandName}.png`)}/>
            </div>
        </div>
    );
}

export default Brand;
