import React, { useState } from 'react';
import './TransferBox.scss';
import { TransferBlock } from './TransferBlock';
import PathDown from '../../assets/images/path-down.svg';
import PathUp from '../../assets/images/path-up.svg';

const optionsUAH = [
    {
        property:"Назва компанії",
        value:"БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””"
    },
    {
        property:"IBAN код",
        value:"UA643515330000026009005902082"
    },
    {
        property: "Назва банку",
        value:"АТ КБ 'ПриватБанк'"
    },
    {
        property: "Адреса банку",
        value:"Україна, м. Київ, вулиця Грушевського, будинок 1Д"
    },
    {
        property: "Код ЄДРПОУ",
        value:"44773154"
    },
    {
        property: "SWIFT код",
        value:"PBANUA2"
    },
    {
        property: "Адреса компанії",
        value:"Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33"
    }
]
const optionsEUR = [
    {
        property:"Назва компанії",
        value:"CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””"
    },
    {
        property:"IBAN код",
        value:"UA193515330000026000005903392"
    },
    {
        property: "Назва банку",
        value:"SC CB 'PRIVATBANK'"
    },
    {
        property: "Адреса банку",
        value:"Ukraine, Kyiv, Hrushevsky Street, building 1D"
    },
    {
        property: "Код ЄДРПОУ",
        value:"44773154"
    },
    {
        property: "SWIFT код",
        value:"PBANUA2"
    },
    {
        property: "Адреса компанії",
        value:"Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33"
    },
    {
        property: "Банк кореспондент",
        value: "Commerzbank AG"
    },
    {
        property: "Адреса банку кореспондента",
        value: "Frankfurt am Main, Germany"
    },
    {
        property: "Рахунок в банку кореспонденті",
        value: "400886700401"
    },
    {
        property: "SWIFT код банку кореспондента",
        value: "COBADEFF"
    }
]
const optionsUSD = [
    {
        property:"Назва компанії",
        value:"CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””"
    },
    {
        property:"IBAN код",
        value:"UA433515330000026001035904638"
    },
    {
        property: "Назва банку",
        value:"SC CB 'PRIVATBANK'"
    },
    {
        property: "Адреса банку",
        value:"Ukraine, Kyiv, Hrushevsky Street, building 1D"
    },
    {
        property: "Код ЄДРПОУ",
        value:"44773154"
    },
    {
        property: "SWIFT код",
        value:"PBANUA2"
    },
    {
        property: "Адреса компанії",
        value:"Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33"
    },
    {
        property: "Банк кореспондент",
        value: "JP Morgan Chase Bank"
    },
    {
        property: "Адреса банку кореспондента",
        value: "New York ,USA"
    },
    {
        property: "Рахунок в банку кореспонденті",
        value: "001-1-000080"
    },
    {
        property: "SWIFT код банку кореспондента",
        value: "CHASUS33"
    }
]

export const TransferBox = () => {
    const [show, setShow] = useState(false)
  return (
    <div className="box__container">
        <div className="box__header" onClick={() =>setShow(!show)}>
            <h4 className="box__title"> Банківський платіж за реквізитами </h4>
            {show ? <img className="box__path-down" src={PathUp} /> : <img className="box__path-down" src={PathDown} />}
        </div>
        { show &&
            <div className="box__blocks">
                <TransferBlock 
                currency={"UAH"}
                options={optionsUAH}
                />
                <TransferBlock
                currency={"EUR"}
                options={optionsEUR}
                />
                <TransferBlock 
                currency={"USD"}
                options={optionsUSD}
                />
            </div>
        }
    </div>
  )
}
