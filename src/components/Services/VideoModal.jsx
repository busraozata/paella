/* import React from 'react'

export default function VideoModal(props) {
    let video = `${props.video}`
    return (
        <div
            className="modal fade"
            id={`exampleModalToggle${props.id}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-sm-down"
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button
                            type="button"
                            className="close-modal"
                            data-bs-dismiss="modal"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body ">
                        <iframe
                            className="w-100 "
                            src={
                                video.includes("/watch?v=")
                                    ? video.replace("/watch?v=", "/embed/")
                                    : video
                            }
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="dent"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
 */