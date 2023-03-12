import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { TeamBlock } from '../components/TeamBlock';
import { PartnersBlock } from '../components/PartnersBlock';
import { BreadcrumbsBlock } from '../components/BreadcrumbsBlock';




export const TeamPartnersPage = () => {
  return (
    <>
      <NavigationBar />
      <BreadcrumbsBlock pageName={"Команда та партнери"} />
      <TeamBlock />
      <PartnersBlock />
      <Footer />
    </>
  )
}
