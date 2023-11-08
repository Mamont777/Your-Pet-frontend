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
import NoticesFilter from 'components/Notices/NoticesFilter/NoticesFilter';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import {
  fetchNotices,
  filterNotices,
  getUserCurrentFavorite,
  getUserCurrentNotices,
} from 'redux/notices/notices-operations';
import Loader from 'components/Loader/Loader';
import { Filter, Boxing } from './NoticesPage.styled';
import { Container } from 'components/Notices/Container/Container.styled';


function Notices() {
  const [search, setSearch] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectNoticesIsLoading);

  const allNotices = useSelector(selectAllNotices);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [genderFilter, setGenderFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');


  useEffect(() => {
    const applyFilters = () => {
      const filters = {
        age: ageFilter,
        gender: genderFilter,
      };

      dispatch(filterNotices(filters));
    };
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

    applyFilters();
  }, [categoryName, dispatch, isLoggedIn, search, ageFilter, genderFilter]);

  return (
    <>
      {!allNotices && isLoading && <Loader />}
      {allNotices && (
        <Container>
          <Title>Find your favorite pet</Title>

          <NoticeSearch onFormSubmit={setSearch} />

          <Filter>
            <NoticesCategoriesNav />

            <Boxing>
              <NoticesFilter
                chooseGender={setGenderFilter}
                chooseAge={setAgeFilter}
              />
              <AddPetButton />
            </Boxing>
          </Filter>

          <NoticesCategoriesList
            search={search}
            chosenAgeFilter={ageFilter}
            chosenGenderFilter={genderFilter}
          />
        </Container>
      )}
    </>
  );
}

export default Notices;
