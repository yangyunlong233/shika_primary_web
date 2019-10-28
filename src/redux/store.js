import {createStore} from "redux";
import {CANVAS_SIZE, FIELD_ADD} from "./actions";

const tpl_state = {
    canvas: {
        name: '',
        width: 210,
        height: 297
    },
    fields: []
};

function tpl_reducer(state=tpl_state, action) {
    switch (action.type) {
        case CANVAS_SIZE:
            return Object.assign({}, state, {canvas: action.value});
        case FIELD_ADD:
            return {...state, fields: [...state.fields, action.value]};
        default:
            return state
    }
}

let store = createStore(tpl_reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;