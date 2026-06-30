var size = 0;
var placement = 'point';

var style_map_viewpoint_28 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "14.3px \'平成丸ゴシック Std W8\', sans-serif";
    var labelFill = "#1f78b4";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.8;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("format(
'<span style=\"font-family:''Heisei Maru Gothic Std W8''; font-size:11pt; color:#1f78b4;\">%1</span>
<br>
<span style=\"font-family:''Heisei Maru Gothic Std W4''; font-size:8pt; color:#333333;\">%2</span>',
\"ポイント名\",
\"説明\"
)") !== null) {
        labelText = String(feature.get("format(
'<span style=\"font-family:''Heisei Maru Gothic Std W8''; font-size:11pt; color:#1f78b4;\">%1</span>
<br>
<span style=\"font-family:''Heisei Maru Gothic Std W4''; font-size:8pt; color:#333333;\">%2</span>',
\"ポイント名\",
\"説明\"
)"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(31,120,180,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
