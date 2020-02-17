import React from 'react';
import Brand from "../brand/Brand";
import './Work.scss';

function Work() {
    return (
        <section className="Work">
            <div className="container">
                <section className="brand__container">
                    <Brand hasImage brandName="cygni"/>
                    <Brand hasImage brandName="telia"/>
                    <Brand hasImage brandName="comhem"/>
                    <Brand hasImage brandName="eniro"/>
                    <Brand hasImage brandName="telenor"/>
                    <Brand hasImage brandName="dragonskolan"/>
                    <Brand brandName="Norrlandsoperan">
                        <svg width="94" height="71" viewBox="0 0 282 214">
                            <g className="Logo" fill="#fff">
                                <polygon className="N1"
                                         points="0 68.4028 0 208.8398 26.211 208.8398 26.211 128.5048 115.653 213.5208 115.653 178.3338"/>
                                <polygon className="N2"
                                         points="115.6534 -3 89.4424 -3 89.4424 98.9285 115.6534 123.8425"/>
                                <path
                                    d="M211.9981,185.2085 C187.6171,185.2085 169.2271,166.1875 169.2271,140.9615 C169.2271,115.7365 187.6171,96.7155 211.9981,96.7155 C236.3851,96.7155 254.7711,115.7365 254.7711,140.9615 C254.7711,166.1875 236.3851,185.2085 211.9981,185.2085 M211.9981,71.6075 C173.1101,71.6075 142.6491,102.0725 142.6491,140.9615 C142.6491,179.8515 173.1101,210.3155 211.9981,210.3155 C250.8891,210.3155 281.3531,179.8515 281.3531,140.9615 C281.3531,102.0725 250.8891,71.6075 211.9981,71.6075"
                                    className="O"/>
                            </g>
                        </svg>
                    </Brand>
                </section>
            </div>
        </section>
    );
}

export default Work;
