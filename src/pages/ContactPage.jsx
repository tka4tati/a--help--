import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { ContactsBlock } from '../components/ContactsBlock';
import { AdditionalInfoBlock } from '../components/AdditionalInfoBlock';
import { BreadcrumbsBlock } from '../components/BreadcrumbsBlock';




export const ContactPage = () => {
  return (
    <>
     
      <NavigationBar />
      <BreadcrumbsBlock pageName={"Контакти"}/>
      <ContactsBlock />
      <AdditionalInfoBlock />
      <Footer />
    </>
  )
}
