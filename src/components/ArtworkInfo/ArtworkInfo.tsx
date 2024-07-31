import {Artwork} from "@type/types.ts";
import React from "react";
import {InfoList, Overview, SectionTitle, Author, Title, InfoItem, Date} from "@components/ArtworkInfo/artworkInfo.style.tsx";


export interface ArtworkInfoProps {
    artwork: Artwork
}

export const ArtworkInfo: React.FC<ArtworkInfoProps> = ({artwork}) => {
    return (
        <>
            <section>
                <Title>{artwork.title}</Title>
                <Author>{artwork.artist_title}</Author>
                <Date>1535-45</Date>
            </section>
            <Overview>
                <SectionTitle>Overview</SectionTitle>
                <InfoList>
                    <InfoItem>
                        <strong>Artist nationality:</strong> {artwork.artist_display}
                    </InfoItem>
                    <InfoItem>
                        <strong>Dimensions:</strong> Sheet: {artwork.dimensions}
                    </InfoItem>
                    <InfoItem>
                        <strong>Credit Line:</strong> {artwork.credit_line}
                    </InfoItem>
                    <InfoItem>
                        <strong>Repository:</strong> {artwork.department_title}
                    </InfoItem>
                    <InfoItem>{artwork.is_public_domain ? <b>Public</b> : <b>Private</b>}</InfoItem>
                </InfoList>
            </Overview>
        </>
    )
}