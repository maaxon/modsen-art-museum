import { TitleSectionProps } from '../../../../../modsen-art-museum-main/src/types/types.ts';
import React from 'react';
import { Header, Subtitle, Title } from './titleSection.styles.ts';

const TitleSection: React.FC<TitleSectionProps> = ({ subtitle, title }) => {
  return (
    <Header>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Header>
  );
};

export default TitleSection;
