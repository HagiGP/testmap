var size = 0;
var placement = 'point';
function categories__6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'タケ・ササ群落':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,223,138,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '塩沼地植生':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,223,138,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '河辺林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,209,150,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '海岸断崖地植生':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,209,150,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '海岸風衝低木群落':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,183,151,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '岩角地・海岸断崖地針葉樹林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,183,151,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '岩角地・風衝地低木群落':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,183,151,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '渓畔林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,223,138,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '耕作地':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,227,182,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '砂丘植生':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,209,150,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '市街地等':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,93,27,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '自然低木群落':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(188,215,160,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '湿原・河川・池沼植生':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,223,138,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '沼沢林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,209,150,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '常緑広葉樹二次林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(184,203,117,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '常緑広葉樹林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(184,203,117,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '常緑針葉樹二次林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,170,107,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '植林地':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,184,131,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '暖温帯針葉樹林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,183,151,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '竹林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(174,203,146,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '低木群落':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(188,215,160,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '二次草原':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(174,215,136,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伐採跡地群落':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,183,151,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '牧草地・ゴルフ場・芝地':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,230,178,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '落葉広葉樹二次林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,200,142,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '落葉広葉樹林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,200,142,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '落葉広葉樹林（太平洋型）':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(170,209,157,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '落葉広葉樹林（日本海型）':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(188,215,160,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '落葉広葉低木群落':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(188,215,160,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '冷温帯針葉樹林':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,183,151,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,33,148,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style__6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("DAI_N");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories__6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
