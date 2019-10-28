import {createStore} from "redux";
import {CANVAS_WIDTH, CANVAS_HEIGHT} from "./actions";

const tpl_state = {
    canvas: {
        name: '',
        width: 'aa',
        height: ''
    },
    fields: {
        name: '',
        id: ''
    }
};

function tpl_reducer(state = tpl_state, action) {
    switch (action.type) {
        case CANVAS_WIDTH:
            return Object.assign({}, state, {canvas:{width: action.value}});
        case CANVAS_HEIGHT:
            return Object.assign({}, state, {canvas: {height: action.value}});
        default:
            return state
    }
}

let store = createStore(tpl_reducer);
export default store;