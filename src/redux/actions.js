export const CANVAS_SIZE = 'canvas_size';

export function set_canvas_size(value) {
    return {
        type: CANVAS_SIZE,
        value
    }
}

export const FIELD_ADD = 'field_add';

export function field_add(value) {
    return {
        type: FIELD_ADD,
        value
    }
}