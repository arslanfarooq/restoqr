import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className={"container-fluid hero"}>
        <div className={"row"}>
          <div className={"col-sm-12 d-flex justify-content-center align-items-center"}>
            <img src={"/images/hero.jpg"}/>
            <div className={"container"}>
              <div className={"row"}>
                <h1>RestoQR</h1>
              </div>
              <div className={"row"}>
                <p>Merge Technology with Ordering Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"container boxer"}>
        <div className={"row text-center"}>
          <div className={"col-sm-12"}>
            <h1>What is RestoQR?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamvis enim depravatae non sint, pravae tamen esse possunt. Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Itaque hic ipse iam pridem est reiectus; Quo modo autem philosophus loquitur?
            </p>
          </div>
        </div>
      </div>


      <div className={"container example"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-12 d-flex justify-content-center align-items-center"}>
            <div className={"boxer text-center"} >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamvis enim depravatae non sint, pravae tamen esse possunt. Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Itaque hic ipse iam pridem est reiectus; Quo modo autem philosophus loquitur?
              </p>
            </div>
          </div>
          <div className={"col-md-6 col-sm-12"}>
            <img src={"/images/example.jpeg"}/>
          </div>
        </div>
      </div>


      <div className={"container example"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-12"}>
            <img src={"/images/main.png"}/>
          </div>
          <div className={"col-md-6 col-sm-12 d-flex justify-content-center align-items-center"}>
            <div className={"boxer text-center"} >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamvis enim depravatae non sint, pravae tamen esse possunt. Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Itaque hic ipse iam pridem est reiectus; Quo modo autem philosophus loquitur?
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className={"container example"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-12 d-flex justify-content-center align-items-center"}>
            <div className={"boxer text-center"} >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamvis enim depravatae non sint, pravae tamen esse possunt. Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Itaque hic ipse iam pridem est reiectus; Quo modo autem philosophus loquitur?
              </p>
            </div>
          </div>
          <div className={"col-md-6 col-sm-12"}>
            <img src={"/images/item.png"}/>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
