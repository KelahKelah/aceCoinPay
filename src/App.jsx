import {
  cardImg,
  // checkIcon, 
  // masterCardIcon, 
  // menuIcon, 
  logo
} from './assets/images'
import './App.css'

function App() {

  return (
    <div className='page-wrap'>

      <div className='card-detail-wrap'>

        <div className='header-wrap'>
          <img src={logo} alt="logo" />

          <div className='time-wrap'>
            <span>0</span>
            <span>1</span>
            <p>:</p>
            <span>1</span>
            <span>9</span>

          </div>
        </div>

        <div className='card-number-wrap'>
          <div>
            <div>
              <h4 className='title'>CVV Number</h4>
              <p className='text'>Enter the 16-digit card number on the card</p>
            </div>

            <div>
              <p>Edit</p>
            </div>
          </div>

          {/* <input /> */}

        </div>

        <div className='cvv-wrap'>
          <div>
            <h4 className='title'>Expiry Date</h4>
            <p className='text'> Enter the expiration date of the card</p>
          </div>

          <div>
            <input placeholder='2412 - 7512 - 3412 - 3456' />
          </div>
        </div>


        <div className='cvv-wrap'>
          <div>
            <h4 className='title'>Password</h4>
            <p className='text'> Enter your dynamic password</p>
          </div>

          <div>
            <input placeholder='2412 - 7512 - 3412 - 3456' />
          </div>
        </div>

        <button>Pay Now</button>

      </div>




      <div className='card-image-wrap'>
        <img src={cardImg} alt="" />
      </div>
    </div>
  )
}

export default App
