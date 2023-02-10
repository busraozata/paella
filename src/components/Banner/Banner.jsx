import React from 'react'
import Substances from '../../UI/Substances'
import "./Banner.scss";
import dummyBanner from '../../API/dummyBanner';
export default function Banner() {
    let [first, last] = dummyBanner.title.split(" ");

    return (
        <section className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <img src={dummyBanner.image} className='img-fluid banner-img' alt="banner" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content d-flex flex-column align-items-center">

                            <h1>{first} <span>{last}</span></h1>
                            <h5 className='text w-100' style={{maxWidth:"100%"}}>{dummyBanner.subTitle}</h5>
                            <p>
                                {dummyBanner.text}
                            </p>
                            <p className='text w-100'>{dummyBanner.text2}</p>
                            <div className="list">
                                <ul>
                                    {dummyBanner.subStances?.map((item, index) => {
                                        return (
                                            <Substances {...item} key={index} />
                                        );
                                    })}

                                </ul>
                            </div>
                            {
                                dummyBanner.subText ? (
                                    <p className='info'>
                                        {dummyBanner.subText}
                                    </p>
                                ) : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
