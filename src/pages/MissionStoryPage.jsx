import React from 'react';
import { MissionBlock } from '../components/MissionBlock';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { HistoryBlock } from '../components/HistoryBlock';
import { BreadcrumbsBlock } from '../components/BreadcrumbsBlock';



export const MissionStoryPage = () => {
  return (
    <>
    <NavigationBar />
    <BreadcrumbsBlock pageName={"Мета та історія фонду"} />
    <MissionBlock />
    <HistoryBlock />
    <Footer />
    </>
  )
}
