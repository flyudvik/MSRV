import {VIEW_DESCRIPTOR} from '../constants/ActionTypes'


export default function descriptor(state, action){
    switch(action.type) {
        case VIEW_DESCRIPTOR:
            return [
                {

                },
                ...state
            ];
        default:
            return state;
    }
}