import React from 'react'
import "./Header.scss"

export default function Header() {
    /*   const [sticky, setSticky] = useState("");
  
      // on render, set listener
      useEffect(() => {
          console.log("hello");
          window.addEventListener("scroll", isSticky);
          return () => {
              window.removeEventListener("scroll", isSticky);
          };
      }, []);
  
      const isSticky = () => {
          const scrollTop = window.scrollY;
          const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
          setSticky(stickyClass);
          console.log(stickyClass);
      }; */
    /* className={`${sticky}`} */
    return (
        <header >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="img-wrapper">
                            <img src="https://www.ajansred.com/img/logo.png" className='img-fluid' alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 justify-content-end d-flex">
                        {/* <div className="img-wrapper">
                            <img src="https://www.ajansred.com/img/logo.png" className='img-fluid' alt="logo" />
                        </div> */}
                        <h1>PAELLA</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
