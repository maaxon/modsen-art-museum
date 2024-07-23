import React from 'react';
import { ArrowDown, ArrowUp, SortButtonWrapper } from '@ui/SortButton/sortButton.style.tsx';
import arrow from "@assets/images/arrow.svg";

export interface SortButtonProps{
  title:string,
  upArrowSort: string;
  downArrowSort:string;
  onSwitch:(sort: string)=>void
  currentSort: string;
}

const SortButton: React.FC<SortButtonProps> = ({title, upArrowSort, downArrowSort,onSwitch, currentSort}) => {


  const clickHandler = () =>{
    let sort = upArrowSort;
    if(currentSort === upArrowSort) sort = downArrowSort;
    if(sort) onSwitch(sort);
  };

  return (
    <SortButtonWrapper onClick={clickHandler}>
      <span>{title}</span>
      {currentSort === upArrowSort && <ArrowUp src={arrow}/>}
      {currentSort === downArrowSort && <ArrowDown src={arrow}/>}
    </SortButtonWrapper>
  );
};

export default SortButton;