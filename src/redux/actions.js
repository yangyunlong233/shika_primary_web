export const CANVAS_WIDTH = 'canvas_width';
export const CANVAS_HEIGHT = 'canvas_height';

export function set_canvas_width(value) {
    return {
        type: CANVAS_WIDTH,
        value
    }
}