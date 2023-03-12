import React from 'react'
import { NavigationBar } from '../components/NavigationBar';
import { ShortInfoBlock } from '../components/ShortInfoBlock';
import { CurrentNeeds } from '../components/CurrentNeeds';
import { TransferBox } from '../components/TransferBox';
import { HelpBlock } from '../components/HelpBlock';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Infographics } from '../components/Infographics';
import { SuccessfulStories } from '../components/SuccessfulStories';





export const MainPage = () => {
  return (
    <>
        <NavigationBar />
        <ShortInfoBlock />
        <CurrentNeeds
        isShowButton={true}
        />
        <HelpBlock />
        <TransferBox />
        <Form />
        <Infographics />
        <SuccessfulStories 
        isShowButton={true}
        />
        <Footer />
    </>
  )
}
