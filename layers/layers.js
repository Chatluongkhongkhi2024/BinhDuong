ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32648").setExtent([595382.577933, 1184148.885279, 795016.732901, 1284045.880359]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ranhgioihuyencat_1 = new ol.format.GeoJSON();
var features_ranhgioihuyencat_1 = format_ranhgioihuyencat_1.readFeatures(json_ranhgioihuyencat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_ranhgioihuyencat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ranhgioihuyencat_1.addFeatures(features_ranhgioihuyencat_1);
var lyr_ranhgioihuyencat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ranhgioihuyencat_1, 
                style: style_ranhgioihuyencat_1,
                popuplayertitle: 'ranhgioihuyencat',
                interactive: false,
    title: 'ranhgioihuyencat<br />\
    <img src="styles/legend/ranhgioihuyencat_1_0.png" /> Bắc Tân Uyên<br />\
    <img src="styles/legend/ranhgioihuyencat_1_1.png" /> Bàu Bàng<br />\
    <img src="styles/legend/ranhgioihuyencat_1_2.png" /> Bến Cát<br />\
    <img src="styles/legend/ranhgioihuyencat_1_3.png" /> Dầu Tiếng<br />\
    <img src="styles/legend/ranhgioihuyencat_1_4.png" /> Dĩ An<br />\
    <img src="styles/legend/ranhgioihuyencat_1_5.png" /> Phú Giáo<br />\
    <img src="styles/legend/ranhgioihuyencat_1_6.png" /> Tân Uyên<br />\
    <img src="styles/legend/ranhgioihuyencat_1_7.png" /> Thủ Dầu Một<br />\
    <img src="styles/legend/ranhgioihuyencat_1_8.png" /> Thuận An<br />\
    <img src="styles/legend/ranhgioihuyencat_1_9.png" /> <br />' });
var format_NngNO2_2 = new ol.format.GeoJSON();
var features_NngNO2_2 = format_NngNO2_2.readFeatures(json_NngNO2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_NngNO2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NngNO2_2.addFeatures(features_NngNO2_2);
var lyr_NngNO2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NngNO2_2, 
                style: style_NngNO2_2,
                popuplayertitle: 'Nồng Độ NO2',
                interactive: true,
                title: '<img src="styles/legend/NngNO2_2.png" /> Nồng Độ NO2'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_ranhgioihuyencat_1.setVisible(true);lyr_NngNO2_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_ranhgioihuyencat_1,lyr_NngNO2_2];
lyr_ranhgioihuyencat_1.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_NngNO2_2.set('fieldAliases', {'STT': 'STT', 'Vị trí': 'Vị trí', 'Ký hiệu': 'Ký hiệu', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Đơn vị': 'Đơn vị', 'Tháng 1': 'Tháng 1', 'Tháng 2': 'Tháng 2', 'Tháng 3': 'Tháng 3', 'Tháng 4': 'Tháng 4', 'Tháng 5': 'Tháng 5', 'Tháng 6': 'Tháng 6', 'Tháng 7': 'Tháng 7', 'Tháng 8': 'Tháng 8', 'Tháng 9': 'Tháng 9', 'Tháng 10': 'Tháng 10', 'Tháng 11': 'Tháng 11', 'Tháng 12': 'Tháng 12', });
lyr_ranhgioihuyencat_1.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_NngNO2_2.set('fieldImages', {'STT': '', 'Vị trí': '', 'Ký hiệu': '', 'Longitude': '', 'Latitude': '', 'Đơn vị': '', 'Tháng 1': '', 'Tháng 2': '', 'Tháng 3': '', 'Tháng 4': '', 'Tháng 5': '', 'Tháng 6': '', 'Tháng 7': '', 'Tháng 8': '', 'Tháng 9': '', 'Tháng 10': '', 'Tháng 11': '', 'Tháng 12': '', });
lyr_ranhgioihuyencat_1.set('fieldLabels', {'GID_0': 'inline label - visible with data', 'NAME_0': 'inline label - visible with data', 'GID_1': 'inline label - visible with data', 'NAME_1': 'inline label - visible with data', 'NL_NAME_1': 'inline label - visible with data', 'GID_2': 'inline label - visible with data', 'NAME_2': 'inline label - visible with data', 'VARNAME_2': 'inline label - visible with data', 'NL_NAME_2': 'inline label - visible with data', 'TYPE_2': 'inline label - visible with data', 'ENGTYPE_2': 'inline label - visible with data', 'CC_2': 'inline label - visible with data', 'HASC_2': 'inline label - visible with data', });
lyr_NngNO2_2.set('fieldLabels', {'STT': 'inline label - visible with data', 'Vị trí': 'inline label - visible with data', 'Ký hiệu': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Đơn vị': 'inline label - visible with data', 'Tháng 1': 'inline label - visible with data', 'Tháng 2': 'inline label - visible with data', 'Tháng 3': 'inline label - visible with data', 'Tháng 4': 'inline label - visible with data', 'Tháng 5': 'inline label - visible with data', 'Tháng 6': 'inline label - visible with data', 'Tháng 7': 'inline label - visible with data', 'Tháng 8': 'inline label - visible with data', 'Tháng 9': 'inline label - visible with data', 'Tháng 10': 'inline label - visible with data', 'Tháng 11': 'inline label - visible with data', 'Tháng 12': 'inline label - visible with data', });
lyr_NngNO2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});