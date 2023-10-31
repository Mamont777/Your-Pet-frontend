import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Search, Cross } from 'components/icons';
import { Form, Input, Button, ClearBtn } from './NoticeSearch.styled';

export const NoticeSearch = ({ onSubmitNoticeForm }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!search) onSubmitNoticeForm(search);
  }, [onSubmitNoticeForm, search]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = search.toLowerCase().trim();

    onSubmitNoticeForm(searchQuery);
    if (searchQuery === '') {
      Notify.warning('Please enter something');
      return;
    }
  };

  const handleChange = e => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
  };

  const onClickClear = () => {
    setSearch('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        id="searchQuery"
        value={search}
        placeholder="Search"
        onChange={handleChange}
      />

      <Button type="submit" search={search} aria-label="Submit">
        <Search />
      </Button>

      <ClearBtn
        search={search}
        type="button"
        onClick={onClickClear}
        aria-label="Discard search"
      >
        <Cross />
      </ClearBtn>
    </Form>
  );
};

NoticeSearch.propTypes = {
  onSubmitNoticeForm: PropTypes.func.isRequired,
};
