import React,{useState,useRef} from 'react';
import './TransferBox.scss';
import CopyIcon from "../../assets/images/copy-paste.svg";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export const CopyButton = ({value}) => {
  const [toggle, setToggle] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {isCopied ? "Скопійовано": "Скопіювати"}
    </Tooltip>
  );
  return (
    <OverlayTrigger 
      placement="top"
      show={toggle}
      delay={{ show: 250, hide: 100 }}
      overlay={renderTooltip}
   >
      <CopyToClipboard text={value}>
        <div className='box__block-button'
        onClick={()=>{
          setIsCopied(true)
        }}
         onMouseEnter={()=>{
           setToggle(true)
          
          }}
         onMouseLeave={()=>{
           setToggle(false)
           setIsCopied(false)
        }}
         > <img className="box__block-icon" src={CopyIcon} /></div>
      </CopyToClipboard> 
    </OverlayTrigger>


  
    
  )
}