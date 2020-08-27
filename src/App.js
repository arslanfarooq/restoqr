import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className={"container-fluid hero"}>
        <div className={"row"}>
          <div className={"col-sm-12 d-flex justify-content-center align-items-center"}>
            <img src={"https://i.ibb.co/jgH0SvC/hero.jpg"}/>
            <div className={"container"}>
              <div className={"row"}>
                <h1>RistoQR</h1>
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
            <h1>What is RistoQR?</h1>
            <p>
              RistoQr is a platform for solving ordering process problems in restaurants and cafes. By this platform a customer can check the menu and different dishes and drinks, see the review and other customers opinion and then order and do the payment. With this new approach we simplified and also enhanced  the ordering process.

            </p>
          </div>
        </div>
      </div>


      <div className={"container example"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-12 d-flex justify-content-center align-items-center"}>
            <div className={"boxer text-center"} >
              <p>
                Each table will have a QR code on top or QR code around for self-service restaurants/cafes , directing customers to the menu and food order page of the restaurants/cafes. QR codes will include the table number encoded. Each person in the table can use her/his phone camera to read the QR code.
              </p>
            </div>
          </div>
          <div className={"col-md-6 col-sm-12"}>
            <img src={"https://i.ibb.co/V3bQLRB/example.jpg"}/>
          </div>
        </div>
      </div>


      <div className={"container example"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-12"}>
            <img src={"https://i.ibb.co/JtLbn7C/main.png"}/>
          </div>
          <div className={"col-md-6 col-sm-12 d-flex justify-content-center align-items-center"}>
            <div className={"boxer text-center"} >
              <p>
                cooking methods of the food in other words photos of the dishes, showing clear dietary info as well as recommendations from the app about what to order based on their previous orders in the app as well as other customers' previous orders having similar taste with them. They will also be able to see the reviews and stars for each food in the menu.
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
                As soon as customers are done with their order and pay for it, it  will be forwarded to the kitchen and the food will be served to the table as soon as it is ready.  Estimated serving time will be shared with the customers in the app which will allow them to track their order.
              </p>
            </div>
          </div>
          <div className={"col-md-6 col-sm-12"}>
            <img src={"https://i.ibb.co/ZKZ7DhV/item.png"}/>
          </div>
        </div>
      </div>


      <div className={"row d-flex justify-content-center"}>

        <div className={"col-lg-5 col-md-7 col-sm-11  text-center"}>
          <hr/>
          <p className={"boxer"}>
            You Want it? Just Tell Us : eitscu14@inf.elte.hu
          </p>
        </div>


      </div>


    </div>
  );
}

export default App;
