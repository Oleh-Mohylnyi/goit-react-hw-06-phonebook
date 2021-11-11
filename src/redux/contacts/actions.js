import { v4 as uuid } from 'uuid';

const addContact = (name, number) => ({
    type: 'contacts/add',
    payload: {
        id: uuid(),
        name,
        number
    }
})

const deleteContact = (id) => ({
    type: 'contacts/delete',
    payload: id
})

const setFilter = (filter) => ({
    type: 'filter/set',
    payload: {filter}
})

export {addContact, deleteContact, setFilter}