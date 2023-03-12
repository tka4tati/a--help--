import React,{useState,useEffect} from 'react';
import './HelpBlock.scss';
import Card from '../../assets/images/card.svg';
import PayPal from '../../assets/images/PayPal.svg';
import TickIcon from '../../assets/images/tick.svg'

export const PaymentBlock = () => {
    const [currency, setCurrency] = useState("UAH")
  const [value, setValue] = useState(0)
  const [error, setError] = useState(false)

  const onClickHandler = () =>{
    if(!value) setError(true)
    if(value) setError(false)
  }

  const changeCurrency =(currency)=>{
    setCurrency(currency)
    setValue(0)
  }

  useEffect(() => {
    if(value){
      setError(false)
    }
  }, [value])
  

  return (
        <>
            <div className="help__box-currency radio">
            <div className={currency === "UAH" && "active"} onClick={()=>changeCurrency("UAH")}>{currency === "UAH" && <img src={TickIcon}/>} UAH</div>
            <div className={currency === "USD" && "active"} onClick={()=>changeCurrency("USD")}>{currency === "USD" && <img src={TickIcon}/>} USD</div>
            <div className={currency === "EUR" && "active"} onClick={()=>changeCurrency("EUR")}>{currency === "EUR" && <img src={TickIcon}/>} EUR </div>
            </div>
            {currency === "UAH" && 
            <div className="help__box-amount radio">
            <div className={`${error && "error"} ${value === 100 && "active"}`} onClick={()=>setValue(100)}>
            {value === 100 && <img src={TickIcon}/>}   
            100  
            </div>
            <div className={`${error && "error"} ${value === 200 && "active"}`} onClick={()=>setValue(200)}>
            {value === 200 && <img src={TickIcon}/>}   
            200
            </div>
            <div className={`${error && "error"} ${value === 500 && "active"}`} onClick={()=>setValue(500)}>
            {value === 500 && <img src={TickIcon}/>}   
            500
            </div>
            </div>
            }
            {(currency ==="EUR" || currency === "USD")  && 
            <div className="help__box-amount radio">
            <div className={`${error && "error"} ${value === 50 && "active"}`}  onClick={()=>setValue(50)}>
            {value === 50 && <img src={TickIcon}/>}50  
            </div>
            <div className={`${error && "error"} ${value === 100 && "active"}`}  onClick={()=>setValue(100)}>
            {value === 100 && <img src={TickIcon}/>}100
            </div>
            <div className={`${error && "error"} ${value === 200 && "active"}`}  onClick={()=>setValue(200)}>
            {value === 200 && <img src={TickIcon}/>}200
            </div>
            </div>
            }
            
            <input min="1" max="10000" className={`help__box-input ${error && "error"}`}  onChange={(e)=>{setValue(e.target.value)}} type="number" placeholder='Запропонувати іншу суму' />
           {error && <p className="help__error-text">*Введіть суму або виберіть із запропонованих сум вище</p>} 
            <div className="help__box-buttons">
            <a onClick={onClickHandler} className="help__box-button">Донат за допомогою картки <img src={Card} alt="card icon"/></a>
            
            <a className="help__box-button" href="https://www.paypal.com/donate/?hosted_button_id=2K9ZZ8GQGYMFQ" target="_blank">Донат за допомогою <img src={PayPal} alt="paypal icon"/></a>
            </div> 
        </>
  )
}
