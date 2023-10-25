import React from 'react';
import {
  BottomInfoWrapper,
  ImageWrapper,
  Img,
  NewsBody,
  NewsDate,
  NewsItemContainer,
  NewsLink,
  NewsTitle,
  TextContent,
} from './NewsItem.styled';
import { format } from 'date-fns';

export const NewsItem = ({ news }) => {
  const { imgUrl, title, date, url, text } = news;

  const formatDate = date => {
    return format(new Date(date), 'Pp');
  };

  return (
    <>
      <NewsItemContainer>
        <ImageWrapper>
          <Img src={imgUrl} alt={title} />
        </ImageWrapper>
        <TextContent>
          <NewsTitle href={url && url}>{title}</NewsTitle>
          <NewsBody text={text} length={230} />
          <BottomInfoWrapper>
            <NewsDate>{formatDate(date)}</NewsDate>
            <NewsLink href={url} target="_blank" rel="noreferrer">
              Read more
            </NewsLink>
          </BottomInfoWrapper>
        </TextContent>
      </NewsItemContainer>
    </>
  );
};
