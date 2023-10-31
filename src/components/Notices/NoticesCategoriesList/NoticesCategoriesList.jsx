import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllNotices } from 'redux/notices/notices-selectors';
import { NoticesCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import { NoticeList, TextBox, Text } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router-dom';
import {
  selectUserCurrentFavoriteNotices,
  selectUserCurrentNotices,
} from 'redux/user/user-selectors';
import { useAuth } from 'hooks/useAuth';
import {
  getUserCurrentFavorite,
  getUserCurrentNotices,
} from 'redux/user/user-operations';

export const NoticesCategoriesList = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const [noticesForList, setNoticesForList] = useState([]);
  const notices = useSelector(selectAllNotices);
  const ownNotices = useSelector(selectUserCurrentNotices);
  const userFavotites = useSelector(selectUserCurrentFavoriteNotices);

  const categoryName = useParams().categoryName;

  useEffect(() => {
    try {
      if (categoryName === 'own') {
        setNoticesForList(ownNotices);
      } else if (categoryName === 'favorite') {
        setNoticesForList(userFavotites);
      } else if (categoryName === 'sell' || 'lost-found' || 'in-good-hands') {
        setNoticesForList(notices);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [categoryName, notices, ownNotices, userFavotites]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserCurrentFavorite());
      dispatch(getUserCurrentNotices());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <NoticeList>
      {noticesForList.length > 0 ? (
        noticesForList?.map((item, index) => (
          <NoticesCategoryItem key={index} notice={item} />
        ))
      ) : (
        <TextBox>
          <Text>Nothing was found for your request. Try again</Text>
        </TextBox>
      )}
    </NoticeList>
  );
};
