var size = 0;
var placement = 'point';

var style_HagiGP_geosites_26 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "14.3px \'平成丸ゴシック Std W8\', sans-serif";
    var labelFill = "#333333";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("format(
'<span style=\"font-family:''Heisei Maru Gothic Std W8''; font-size:11pt; color:#333333;\">%1</span>
<br>
<span style=\"font-family:''Heisei Maru Gothic Std W4''; font-size:8pt; color:#333333;\">%2</span>',
\"サイト名\",
\"説明\"
)") !== null) {
        labelText = String(feature.get("format(
'<span style=\"font-family:''Heisei Maru Gothic Std W8''; font-size:11pt; color:#333333;\">%1</span>
<br>
<span style=\"font-family:''Heisei Maru Gothic Std W4''; font-size:8pt; color:#333333;\">%2</span>',
\"サイト名\",
\"説明\"
)"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
