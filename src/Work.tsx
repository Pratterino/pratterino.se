import React from 'react';
import Brand from "./Brand";
import './Work.scss';

function Work() {
    return (
        <section className="Work">
            <div className="container">
                <section className="brand__container">
                    <Brand brandName="cygni"/>
                    <Brand brandName="telia"/>
                    <Brand brandName="comhem"/>
                    <Brand brandName="eniro"/>
                    <Brand brandName="telenor"/>
                    <Brand brandName="dragonskolan"/>
                </section>
            </div>
        </section>
    );
}

export default Work;
