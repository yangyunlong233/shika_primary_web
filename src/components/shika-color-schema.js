/*
* shika color schema config
* define color value, protected design
* */

class Color {
    constructor() {
        this.PRIMARY = "hsl(16, 99%, 60%)";
        this.PRIMARY_HOVER = "hsl(16, 99%, 65%)";
        this.DARK = "hsl(222, 14%, 15%)";
        this.DARKEN = "hsl(222, 14%, 12%)";
        this.LIGHT = "hsl(215, 13%, 49%)";
        this.LIGHTEN = "hsl(240, 1%, 70%)";
        this.CONFIRM = "hsl(105, 64%, 46%)";
        this.CONFIRM_HOVER = "hsl(105, 64%, 50%)";
        this.CANCEL = "hsl(3, 100%, 66%)";
        this.CANCEL_HOVER = "hsl(3, 100%, 70%)";
    }
}

const ColorShema = new Color();
export default ColorShema;
