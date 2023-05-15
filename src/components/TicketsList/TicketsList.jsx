import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketCard from '../TicketCard/TicketCard';
import * as actions from '../../redux/actions/actions';
import Spinner from '../Spinner/Spinner';
import TiketsApi from '../../servises/TiketsApi';

import classes from './TicketsList.module.scss';

class TicketsList extends Component {
  tickets = new TiketsApi();

  componentDidMount() {
    const { getSearchId } = this.props;
    this.tickets.getSearchId().then((res) => {
      getSearchId(res);
    });
  }

  componentDidUpdate() {
    const { searchId, fetchTickets, uploaded } = this.props;
    if (!uploaded) {
      fetchTickets(searchId);
    }
    return false;
  }

  renderTicketsList = () => {
    let { tickets, howManyTicketsToShow } = this.props;
    if (tickets.length > 0) {
      let nt = tickets.filter((item) => item.visibility === true);
      return nt.map((item, i) => {
        if (i < howManyTicketsToShow) {
          return <TicketCard key={item.id} ticketData={item} />;
        }
        return false;
      });
    }
    return <div>nothing</div>;
  };

  render() {
    const { loading, showMoreTickets } = this.props;
    if (loading) return <Spinner />;
    return (
      <div className={classes['tickets-list']}>
        {this.renderTicketsList()}
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%', height: '50px' }}
          onClick={showMoreTickets}
        >
          Показать еще
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomValue: state.randomValue,
    searchId: state.searchId,
    tickets: state.ticketsData,
    loading: state.loading,
    uploaded: state.uploaded,
    howManyTicketsToShow: state.howManyTicketsToShow,
    showByPrice: state.showByPrice,
    showByFast: state.showByFast,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchId: (id) => dispatch(actions.getSearchId(id)),
    fetchTickets: (data) => dispatch(actions.fetchTickets(data)),
    showMoreTickets: () => dispatch(actions.showMoreTickets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
