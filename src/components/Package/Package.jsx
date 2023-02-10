import React from 'react'
import "./Package.scss"
import dummyPackage from '../../API/dummyPackage'
export default function Package() {
    return (
        <section className='package'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>En cok tercih edilen paketler</h2>
                    </div>
                    {dummyPackage.map((packageItem, index) => {
                        return (
                            <div className="col-lg-3 col-md-6 d-flex justify-content-center" key={index}>
                                <div className="box">
                                    <h3><span>{index + 1}.</span> {packageItem.bigTitle}</h3>
                                    <h5>{packageItem.title}</h5>
                                    <div className="list">
                                        <ul className='flex-column align-items-start'>
                                            {packageItem.details?.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        {item.title}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    )
}
