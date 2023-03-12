import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { SuccessfulStories } from '../components/SuccessfulStories';
import { Footer } from '../components/Footer';
import { BreadcrumbsBlock } from '../components/BreadcrumbsBlock/BreadcrumbsBlock';



export const SuccessfulStoriesPage = () => {
  return (
    <>
      <NavigationBar />
      <BreadcrumbsBlock pageName={"Успішні історії"}/>
      <div className="page__container">
        <SuccessfulStories 
        isShowButton={false}
        />
      </div>
      <Footer />
    </>
  )
}
