import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { selectNoticesIsLoading } from 'redux/notices/notices-selectors';
import { selectAllNotices } from 'redux/notices/notices-selectors';
import { Title } from 'components/Notices/Title/Title';
import { NoticeSearch } from 'components/Notices/NoticeSearch/NoticeSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddPetButton } from 'components/Notices/AddPetButton/AddPetButton';
import { NoticesFilter } from 'components/Notices/NoticesFilter/NoticesFilter';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { fetchNotices } from 'redux/notices/notices-operations';
import Loader from 'components/Loader/Loader';
import { Filter, Boxing } from './NoticesPage.styled';
import { Container } from 'components/Notices/Container/Container.styled';
import {
  getUserCurrentFavorite,
  getUserCurrentNotices,
} from 'redux/user/user-operations';
import { ScrollToTopButton } from 'components/Notices/ScrollToTopButton/ScrollToTopButton';

function Notices() {
  const [search, setSearch] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectNoticesIsLoading);

  const allNotices = useSelector(selectAllNotices);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    if (
      categoryName === 'sell' ||
      categoryName === 'lost-found' ||
      categoryName === 'in-good-hands'
    ) {
      dispatch(fetchNotices({ categoryName, search }));

      return;
    }
    if (categoryName === 'favorite' && isLoggedIn) {
      dispatch(getUserCurrentFavorite());

      return;
    }
    if (categoryName === 'own' && isLoggedIn) {
      dispatch(getUserCurrentNotices());
      return;
    }
  }, [categoryName, dispatch, isLoggedIn, search]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  scrollToTop();

  return (
    <>
      {!allNotices && isLoading && <Loader />}
      {allNotices && (
        <Container>
          <Title>Find your favorite pet</Title>

          <NoticeSearch onSubmitNoticeForm={setSearch} />

          <Filter>
            <NoticesCategoriesNav />

            <Boxing>
              <NoticesFilter />
              <AddPetButton />
            </Boxing>
          </Filter>

          <NoticesCategoriesList search={search} />

          <ScrollToTopButton />
        </Container>
      )}
    </>
  );
}

export default Notices;
