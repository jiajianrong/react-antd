export const ADD_CONTACT_INFO = 'ADD_CONTACT_INFO';



export function addContactInfo(contactInfo) {
    return {
        type: ADD_CONTACT_INFO,
        payload: contactInfo
    };
}