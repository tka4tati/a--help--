import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { DocsReportsBlock } from '../components/DocsReportsBlock';
import { BreadcrumbsBlock } from '../components/BreadcrumbsBlock/BreadcrumbsBlock';


export const DocsReportsPage = () => {
  return (
    <>
      <NavigationBar />
      <BreadcrumbsBlock pageName={"Документація та звітність"}/>
      <DocsReportsBlock />
      <Footer />
    </>
  )
}
