import React from "react";
import {Skeleton} from "@ui/SkeletonLoader/SkeletonLoader.style.ts";

export interface SmallCardsLoaderProps {
    itemsCount:number
}

const SmallCardsLoader: React.FC<SmallCardsLoaderProps> = ({itemsCount}) => {
    return new Array(itemsCount).fill("")
        .map(()=><Skeleton width={"1fr"} height={"120px"}/>);
}

export default SmallCardsLoader