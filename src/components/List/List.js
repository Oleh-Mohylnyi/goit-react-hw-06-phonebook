import React, {useEffect, useState} from "react"
import ListItem from "../ListItem/ListItem"
import s from './list.module.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/actions'

function List({contactsItems, filter, deleteContact}) {
    const [editCheckbox, setEditCheckbox] = useState(false)

    const doFilter = () => {
        if (contactsItems.length !== 0) {
            return contactsItems.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        }
    }

    const filtredContacts = doFilter()

console.log(filtredContacts);
    useEffect(() => {
        if (filtredContacts.length === 0) {
        setEditCheckbox(false)
    }}, [filtredContacts.length]
    )

    let classNameCheckbox = 'checkboxEdit'
    if (editCheckbox) {
    classNameCheckbox += ' checkboxEditActive'
    }

    const backgroundColorItem = contact =>
        filtredContacts.indexOf(contact) % 2 === 0
            ? { backgroundColor: 'transparent' }
            : { backgroundColor: 'white' }

    return (
        <div className={s.contactsList}>
            <label className={classNameCheckbox}>
                Edit
                <input
                    type="checkbox"
                    className={s.hidden}
                    checked={editCheckbox}
                    onChange={() => setEditCheckbox(!editCheckbox)}
                />
            </label>
            <ul className={s.list}>
                {filtredContacts !== 0 &&
                    filtredContacts.map(contact =>
                        <ListItem
                        key={contact.id}
                        contact={contact}
                        backgroundColorItem={backgroundColorItem(contact)}
                        statusCheckbox={editCheckbox}
                        deleteContact={deleteContact}
                    />
                )}
            </ul>
        </div>
    )
}

List.propTypes = {
    deleteContact: PropTypes.func,
    contactsItems: PropTypes.array,
    filter: PropTypes.string
}
    
const mapStateToProps = state => {
  return {
      contactsItems: state.contacts.items,
      filter: state.contacts.filter
    }
};

const mapDispatchToProps = dispatch => ({
    deleteContact: (id) => dispatch(actions.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
