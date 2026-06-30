var size = 0;
var placement = 'point';

var style_map__23 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'平成丸ゴシック Std W8\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 0.4;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("field_1") !== null) {
        labelText = String(feature.get("field_1"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
