import React from "react";
import {Skeleton} from "./SkeletonLoader.style.ts";

export interface SmallCardsLoaderProps {
    itemsCount:number
}

const SmallCardsLoader: React.FC<SmallCardsLoaderProps> = ({itemsCount}) => {
    return new Array(itemsCount).fill("")
        .map((_,idx)=><Skeleton width={"1fr"} key={Math.random()*idx} height={"120px"}/>);
}

export default SmallCardsLoader