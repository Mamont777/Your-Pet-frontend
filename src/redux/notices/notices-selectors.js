export const selectNoticesIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;
export const selectAllNotices = state => state.notices.items;
export const selectNoticeById = state => state.notices.noticeById;
export const selectFiltredNotices = state => state.notices.filtredNotices;

export const selectUserCurrentNotices = state => state.notices.userNotices;
export const selectUserCurrentFavoriteNotices = state =>
  state.notices.userFavoriteNotices;
export const selectUserCurrentFavoriteNoticesID = state =>
  state.notices.userFavoriteNoticesID;
