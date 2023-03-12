import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { CurrentNeeds } from '../components/CurrentNeeds';
import { Footer } from '../components/Footer';
import { BreadcrumbsBlock } from '../components/BreadcrumbsBlock';


export const CurrentProjectsPage = () => {
  return (
    <>
      <NavigationBar />
      <BreadcrumbsBlock pageName={"Поточні потреби"} />
      <div className="page__container__currentNeeds">
        <CurrentNeeds
        isShowButton={false}
        />
      </div>
      <Footer />
    </>
  )
}