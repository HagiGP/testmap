var size = 0;
var placement = 'point';

var style_HagiGP__24 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'HGSｺﾞｼｯｸE\', sans-serif";
    var labelFill = "#4c4c4c";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.8;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("道の駅") !== null) {
        labelText = String(feature.get("道の駅"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(50,50,50,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
