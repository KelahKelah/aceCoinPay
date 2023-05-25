import {
  cardImg,
  checkIcon,
  masterCardIcon,
  menuIcon,
  logo,
  closeIcon,
  editIcon,
} from "../../assets/images";


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
        <img src={cardImg} alt="" />
      </div>
    </div >


  );
};
