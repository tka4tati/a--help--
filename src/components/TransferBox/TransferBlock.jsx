import React ,{useState} from 'react';
import './TransferBox.scss';
import CopyIcon from "../../assets/images/copy-paste.svg";
import { CopyButton } from './CopyButton';
import {Button} from "../Button";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export const TransferBlock = ({currency,options}) => {
  const copyAllData = (Array.from(options, item => item.property +" : "+ item.value)).join('; '); 
  const [toggle, setToggle] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {isCopied ? "Скопійовано": "Скопіювати"}
    </Tooltip>
  );
  
  return (
    <div className="box__block">
            <h5 className="box__block-title">{currency}</h5>
            {options?.map((item)=>(
            <div className="box__block-field">
            <p className="box__block-property">{item.property}</p>
            <p className="box__block-value">{item.value}</p>
            <CopyButton value={item.value}/>
            </div>
            ))}
             <OverlayTrigger 
            placement="top"
            show={toggle}
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip}
            >
            <CopyToClipboard text={copyAllData}>
                <Button 
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
                text={"Скопіювати все"} icon={CopyIcon} />
            </CopyToClipboard> 
            </OverlayTrigger>
    </div>
  )
}
