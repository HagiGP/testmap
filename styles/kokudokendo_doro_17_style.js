var size = 0;
var placement = 'point';
function categories_kokudokendo_doro_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,56,59,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,183,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(163,95,206,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(97,207,165,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(223,162,65,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,209,19,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_kokudokendo_doro_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("rdCtg");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_kokudokendo_doro_17(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
