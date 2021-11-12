import { v4 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = (name, number) => ({
//     type: 'contacts/add',
//     payload: {
//         id: uuid(),
//         name,
//         number
//     }
// })

const addContact = createAction('contacts/add', (name, number) => {
    return {
        payload: {
            id: uuid(),
            name,
            number
        }
    }
})

// const deleteContact = (id) => ({
//     type: 'contacts/delete',
//     payload: id
// })

const deleteContact = createAction('contacts/delete')

// const setFilter = (filter) => ({
//     type: 'filter/set',
//     payload: {filter}
// })

const setFilter = createAction('filter/set');

const actions = { addContact, deleteContact, setFilter };

export default actions
