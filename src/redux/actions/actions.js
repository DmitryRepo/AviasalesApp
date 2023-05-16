import transformFiltersStatus from '../../utils/transformFiltersStatus';
import TiketsApi from '../../servises/TiketsApi';

import actionTypes from './actionsTypes';
const tikets = new TiketsApi();

export const filterByAll = (newFiltersStatus) => ({
  type: actionTypes.FILTER_BY_ALL,
  filtersStatus: newFiltersStatus,
});

export const filterByZero = (newFiltersStatus) => ({
  type: actionTypes.FILTER_BY_ZERO,
  filtersStatus: newFiltersStatus,
});

export const filterByOne = (newFiltersStatus) => ({
  type: actionTypes.FILTER_BY_ONE,
  filtersStatus: newFiltersStatus,
});

export const filterByTwo = (newFiltersStatus) => ({
  type: actionTypes.FILTER_BY_TWO,
  filtersStatus: newFiltersStatus,
});

export const filterByThree = (newFiltersStatus) => ({
  type: actionTypes.FILTER_BY_THREE,
  filtersStatus: newFiltersStatus,
});

export const getSearchId = (id) => {
  return { type: actionTypes.GET_SEARCH_ID, id: id.searchId };
};

export const stopFetching = () => {
  return {
    type: actionTypes.STOP_FETCHING,
  };
};

export const fetchTicketsSuccess = (tickets) => {
  return {
    type: actionTypes.SUCCESS_FETCHING,
    ticketsData: tickets,
  };
};
export const fetchTicketsError = (er) => {
  return {
    type: actionTypes.ERROR_FETCHING,
    error: er.status,
  };
};

export const fetchTickets = (searchId) => (dispatch) => {
  tikets
    .getTickets(searchId)
    .then((result) => {
      if (result) {
        if (result.stop) {
          dispatch(stopFetching());
        } else {
          dispatch(fetchTicketsSuccess(result.tickets));
        }
      }
    })
    .catch((error) => {
      dispatch(fetchTicketsError(error));
    });
};

export const showMoreTickets = () => {
  return {
    type: actionTypes.SHOW_MORE_TICKETS,
  };
};

export const sortByPrice = () => {
  return {
    type: actionTypes.SORT_BY_PRICE,
  };
};
export const sortByFast = () => {
  return {
    type: actionTypes.SORT_BY_FAST,
  };
};

export const changeFilterStatus = (filter, filtersStatus) => (dispatch) => {
  const newFiltersStatus = transformFiltersStatus(filter, filtersStatus);
  const filters = {
    all: () => dispatch(filterByAll(newFiltersStatus)),
    zero: () => dispatch(filterByZero(newFiltersStatus)),
    one: () => dispatch(filterByOne(newFiltersStatus)),
    two: () => dispatch(filterByTwo(newFiltersStatus)),
    three: () => dispatch(filterByThree(newFiltersStatus)),
  };
  return filters[filter]();
};
