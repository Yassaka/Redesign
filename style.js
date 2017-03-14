import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Lobster', cursive"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Lobster', cursive"
    },
    "hero": {
        "position": "relative",
        "height": 100 * vh,
        "overflow": "hidden",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignContent": "center",
        "alignItems": "center"
    },
    "hero__bg": {
        "position": "fixed",
        "zIndex": -1,
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "backgroundAttachment": "fixed",
        "backgroundImage": "url('fundo.gif')",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover"
    },
    "hero__mask": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "backgroundColor": "rgba(0,0,0,0.7)"
    },
    "hero__tittle": {
        "position": "relative",
        "color": "white",
        "fontSize": 40
    },
    "header": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "height": 80,
        "zIndex": 5,
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "width": "100%",
        "transition": "all .3s ease-in-out",
        "paddingTop": 0,
        "paddingRight": 60,
        "paddingBottom": 0,
        "paddingLeft": 60,
        "boxSizing": "border-box"
    },
    "header__brand": {
        "color": "white",
        "display": "inline-block",
        "fontSize": 32
    },
    "header__items": {
        "listStyle": "none",
        "display": "inline-block"
    },
    "header__item": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 16,
        "marginBottom": 0,
        "marginLeft": 16
    },
    "header__anchor": {
        "color": "white",
        "textDecoration": "none"
    },
    "headerfixed": {
        "height": 80,
        "backgroundColor": "#333"
    },
    "site": {
        "backgroundColor": "#fff"
    },
    "content": {
        "paddingTop": 30,
        "paddingRight": 12,
        "paddingBottom": 30,
        "paddingLeft": 12,
        "maxWidth": 960,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "fontFamily": "'Raleway', sans-serif",
        "fontSize": 18,
        "lineHeight": 24,
        "boxSizing": "border-box"
    },
    "header__menu": {
        "display": "none"
    },
    "content__carousel": {
        "width": "calc(100% - 92px)",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "display": "block"
    },
    "content__carousel slick-arrow": {
        "width": 42,
        "height": 42
    },
    "content__carousel slick-prev": {
        "left": -46
    },
    "content__carousel slick-next": {
        "right": -46
    },
    "content__carousel slick-arrow:before": {
        "color": "#333",
        "fontSize": 42
    },
    "content__image": {
        "float": "left",
        "marginTop": 0,
        "marginRight": "10%",
        "marginBottom": "5%",
        "marginLeft": 0,
        "width": 152
    }
});