import {
  checkIcon,
  masterCardIcon,
  menuIcon,
  logo,
  closeIcon,
  editIcon,
  master,
  chipIcon,
  wifiIcon,
  appleIcon,
  receiptIcon
} from "../../assets/images";
import './style.css'


export const Checkout = () => {

  return (
    < div className="page-wrap" >
      <img className="close-icon" src={closeIcon} alt="close icon" />

      <div className="card-detail-wrap">
        <div className="header-wrap">
          <img src={logo} alt="logo" />
          <div className="time-wrap">
            <span>0</span>
            <span>1</span>
            <p>:</p>
            <span>1</span>
            <span>9</span>
          </div>
        </div>

        <div className="card-number-wrap">
          <div className="card-number-container">
            <div>
              <h4 className="title">Card Number</h4>
              <p className="text">Enter the 16-digit card number on the card</p>
            </div>

            <div>
              <img src={editIcon} alt="edit icon" />
              <p>Edit</p>
            </div>
          </div>

          <div className="cardnumber-input-wrap">
            <img
              className="mastercard-icon"
              src={masterCardIcon}
              alt="master card icon"
            />
            <input
              className="cardnumber-input-field"
              placeholder="2412 - 7512 - 3412 - 3456"
            />
            <img
              className="check-icon"
              src={checkIcon}
              alt="master card icon"
            />
          </div>
        </div>

        <div className="cvv-wrap">
          <div>
            <h4 className="title">CVV Number</h4>
            <p className="text"> Enter the expiration date of the card</p>
          </div>

          <div>
            <input className="input-field" placeholder="327" />
            <img className="menu-icon" src={menuIcon} alt="menu icon" />
          </div>
        </div>

        <div className="cvv-wrap">
          <div>
            <h4 className="title">Expiry Date</h4>
            <p className="text"> Enter the expiration date of the card</p>
          </div>

          <div className="expiry-inputs">
            <input className="input-field" placeholder="09" />
            <span>/</span>
            <input className="input-field" placeholder="22" />
          </div>
        </div>

        <div className="cvv-wrap">
          <div>
            <h4 className="title">Password</h4>
            <p className="text"> Enter your dynamic password</p>
          </div>

          <div>
            <input className="input-field" type="password" placeholder="..." />
            <img className="menu-icon" src={menuIcon} alt="menu icon" />
          </div>
        </div>

        <button className="button-wrap"> Pay Now</button>
      </div>

      <div className="card-image-wrap">
        <div className="mini-card-detail">
          <div className="icon-wrap">
            <img src={chipIcon} alt="" />
            <img src={wifiIcon} alt="" />
          </div>

          <p className="text">Jonathan Micheal</p>
          <p className="title">.... 3456</p>

          <div className="master-wrap">
            <p className="title">09/22</p>
            <img src={master} alt="" />
          </div>
        </div>

        <div className="order-detail">
          <div className="product-detail-wrap">
            <p className="text">Company</p>
            <img src={appleIcon} alt="" />
            <h6 className="title">Apple</h6>
          </div>

          <div className="product-detail-wrap">
            <p className="text">Order Number</p>
            <h6 className="title">1266201</h6>
          </div>

          <div className="product-detail-wrap">
            <p className="text">Product</p>
            <h6 className="title">Macbook Air</h6>
          </div>

          <div className="product-detail-wrap">
            <p className="text">VAT(20%)</p>
            <h6 className="title">$100:00</h6>
          </div>

          <div className="border"></div>

          <div className="product-detail-wrap">
            <div>
              <p className="pay-text">You have to Pay</p>
              <h5 className="amount">549.99 USD</h5>
            </div>
            <img src={receiptIcon} alt="" />
          </div>

        </div>

      </div>
    </div >


  );
};
