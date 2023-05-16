/* eslint-disable indent */
import { v4 as uuidv4 } from 'uuid';

import ticketsFilter from '../../utils/ticketsFilter';
import actionTypes from '../actions/actionsTypes';
const initialState = {
  error: 0,
  searchId: null,
  randomValue: 7,
  ticketsData: [],
  filtersStatus: {
    all: true,
    zero: true,
    one: true,
    two: true,
    three: true,
  },
  uploaded: false,
  loading: true,
  howManyTicketsToShow: 5,
  showByPrice: false,
  showByFast: false,
};

const reducer = (state = initialState, action) => {
  if (state === undefined) return initialState;
  switch (action.type) {
    case actionTypes.GET_SEARCH_ID:
      return {
        ...state,
        searchId: action.id,
        uploading: true,
      };
    case actionTypes.SUCCESS_FETCHING:
      return {
        ...state,
        ticketsData: [...state.ticketsData, ...action.ticketsData].map((item) => {
          const newItem = item;
          newItem.visibility = true;
          if (!item.id) {
            newItem.id = uuidv4();
          }
          return newItem;
        }),
        ticketsCount: [...state.ticketsData, ...action.ticketsData].length,
        uploading: true,
        loading: false,
      };
    case actionTypes.ERROR_FETCHING:
      return {
        ...state,
        error: state.error + 1,
        loading: false,
      };
    case actionTypes.STOP_FETCHING:
      return {
        ...state,
        uploading: false,
        uploaded: true,
      };
    case actionTypes.SHOW_MORE_TICKETS:
      return {
        ...state,
        howManyTicketsToShow: state.howManyTicketsToShow + 5,
      };
    case actionTypes.SORT_BY_PRICE:
      return {
        ...state,
        ticketsData: state.ticketsData.sort((prev, next) => (prev.price > next.price ? 1 : -1)),
        randomValue: state.randomValue + 1,
      };
    case actionTypes.SORT_BY_FAST:
      return {
        ...state,
        ticketsData: state.ticketsData.sort((prev, next) =>
          prev.segments[0].duration + prev.segments[1].duration >
          next.segments[0].duration + next.segments[1].duration
            ? 1
            : -1
        ),
        randomValue: state.randomValue - 1,
      };

    case actionTypes.FILTER_BY_ALL:
      return {
        ...state,
        ticketsData: ticketsFilter([...state.ticketsData], action.filtersStatus),
        filtersStatus: action.filtersStatus,
      };
    case actionTypes.FILTER_BY_ZERO:
      return {
        ...state,
        ticketsData: ticketsFilter([...state.ticketsData], action.filtersStatus),
        filtersStatus: action.filtersStatus,
      };
    case actionTypes.FILTER_BY_ONE:
      return {
        ...state,
        ticketsData: ticketsFilter([...state.ticketsData], action.filtersStatus),
        filtersStatus: action.filtersStatus,
      };
    case actionTypes.FILTER_BY_TWO:
      return {
        ...state,
        ticketsData: ticketsFilter([...state.ticketsData], action.filtersStatus),
        filtersStatus: action.filtersStatus,
      };
    case actionTypes.FILTER_BY_THREE:
      return {
        ...state,
        ticketsData: ticketsFilter([...state.ticketsData], action.filtersStatus),
        filtersStatus: action.filtersStatus,
      };
    default:
      return state;
  }
};
export default reducer;
