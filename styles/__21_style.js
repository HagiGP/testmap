var size = 0;
var placement = 'point';

var style___21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "20.8px \'平成丸ゴシック Std W8\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 0.2;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("N03_004") !== null) {
        labelText = String(feature.get("N03_004"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,89,137,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
