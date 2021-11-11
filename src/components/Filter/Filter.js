import React from "react";
import s from './filter.module.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/actions'

function Filter ({filter, setFilter}) {

    const handleChange = (e) => {
        setFilter( e.target.value )
    }

    return (
        <label className={s.label}>
            Find contacts by name 
        <input
            type="text"
            name="filter"
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
            onChange = {handleChange}
            value = {filter}>
        </input>
        </label>
    )
}

Filter.propTypes = {
    setFilter: PropTypes.func,
    filter: PropTypes.string,
} 

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter
    }
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: (filterString) => dispatch(actions.setFilter(filterString))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);