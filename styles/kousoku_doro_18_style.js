var size = 0;
var placement = 'point';
function categories_kousoku_doro_18(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(19,128,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(64,175,13,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(67,235,67,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(216,139,67,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.216}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_kousoku_doro_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("motorway");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_kousoku_doro_18(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
