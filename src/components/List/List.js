import React, {useEffect, useState} from "react"
import ListItem from "../ListItem/ListItem"
import s from './list.module.scss'
import PropTypes from 'prop-types'

export default function List({filtredContacts, deleteContact}) {
    const [editCheckbox, setEditCheckbox] = useState(false)
    
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
            {filtredContacts.length > 0
                && (<label className={classNameCheckbox}>
                        Edit
                        <input
                            type="checkbox"
                            className={s.hidden}
                            checked={editCheckbox}
                            onChange={() => setEditCheckbox(!editCheckbox)}
                        />
                    </label>)
            }    
            <ul className={s.list}>
                {filtredContacts.map(contact =>
                    <ListItem
                        key={contact.id}
                        contact={contact}
                        backgroundColorItem={backgroundColorItem(contact)}
                        filtredContacts={filtredContacts}
                        changeCheckbox={setEditCheckbox}
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
    filtredContacts: PropTypes.array
    }