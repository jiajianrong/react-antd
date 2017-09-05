import { ADD_CONTACT_INFO } from '../actions/contactInfo';


function contactInfo ( state = {}, action ) {
    
    switch (action.type) {
        
        case ADD_CONTACT_INFO:
            
            return action.payload;
        
        default:
            
            return state;
        
    }
    
}

export default contactInfo