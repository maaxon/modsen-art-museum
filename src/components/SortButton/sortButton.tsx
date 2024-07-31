import React from 'react';
import { ArrowDown, ArrowUp, SortButtonWrapper } from '@components/SortButton/sortButton.style.tsx';

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
      {currentSort === upArrowSort && <ArrowUp src={"/arrow.svg"}/>}
      {currentSort === downArrowSort && <ArrowDown src={"/arrow.svg"}/>}
    </SortButtonWrapper>
  );
};

export default SortButton;