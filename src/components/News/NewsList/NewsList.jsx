import React from 'react';
import { NewsListContainer } from './NewsList.styled';
import { NewsItem } from '../NewsItem/NewsItem';
import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/news-selectors';
import NoItemsFound from '../NoItemsFound/NoItemsFound';

export const NewsList = ({ search }) => {
  const news = useSelector(selectAllNews);

  const filterContactHandler = () => {
    const normalizedFilter = search.toLocaleLowerCase();

    return search
      ? news.filter(item =>
          item.title.toLocaleLowerCase().includes(normalizedFilter)
        )
      : news;
  };
  const filterNews = filterContactHandler();

  return (
    <>
      <NewsListContainer>
        {!filterNews.length && search.length && (
          <NoItemsFound text="Nothing was found for your request. Try again" />
        )}
        {filterNews.map((item, index) => (
          <NewsItem key={index} news={item} />
        ))}
      </NewsListContainer>
    </>
  );
};
