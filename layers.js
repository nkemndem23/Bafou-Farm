var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IndividualFarmerAvocaoFarm_1 = new ol.format.GeoJSON();
var features_IndividualFarmerAvocaoFarm_1 = format_IndividualFarmerAvocaoFarm_1.readFeatures(json_IndividualFarmerAvocaoFarm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndividualFarmerAvocaoFarm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndividualFarmerAvocaoFarm_1.addFeatures(features_IndividualFarmerAvocaoFarm_1);
var lyr_IndividualFarmerAvocaoFarm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndividualFarmerAvocaoFarm_1, 
                style: style_IndividualFarmerAvocaoFarm_1,
                popuplayertitle: "Individual Farmer Avocao Farm",
                interactive: true,
                    title: '<img src="styles/legend/IndividualFarmerAvocaoFarm_1.png" /> Individual Farmer Avocao Farm'
                });
var format_FicusMoraceaeNativeSpecies_2 = new ol.format.GeoJSON();
var features_FicusMoraceaeNativeSpecies_2 = format_FicusMoraceaeNativeSpecies_2.readFeatures(json_FicusMoraceaeNativeSpecies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FicusMoraceaeNativeSpecies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FicusMoraceaeNativeSpecies_2.addFeatures(features_FicusMoraceaeNativeSpecies_2);
var lyr_FicusMoraceaeNativeSpecies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FicusMoraceaeNativeSpecies_2, 
                style: style_FicusMoraceaeNativeSpecies_2,
                popuplayertitle: "Ficus (Moraceae) Native Species",
                interactive: true,
                    title: '<img src="styles/legend/FicusMoraceaeNativeSpecies_2.png" /> Ficus (Moraceae) Native Species'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_IndividualFarmerAvocaoFarm_1.setVisible(true);lyr_FicusMoraceaeNativeSpecies_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IndividualFarmerAvocaoFarm_1,lyr_FicusMoraceaeNativeSpecies_2];
lyr_IndividualFarmerAvocaoFarm_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Distance': 'Distance', });
lyr_FicusMoraceaeNativeSpecies_2.set('fieldAliases', {'type': 'type', 'ident': 'ident', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'y_proj': 'y_proj', 'x_proj': 'x_proj', 'comment': 'comment', 'display': 'display', 'symbol': 'symbol', 'dist': 'dist', 'proximity': 'proximity', 'color': 'color', 'altitude': 'altitude', 'depth': 'depth', 'temp': 'temp', 'time': 'time', 'wpt_class': 'wpt_class', 'sub_class': 'sub_class', 'attrib': 'attrib', 'link': 'link', 'state': 'state', 'country': 'country', 'city': 'city', 'address': 'address', 'zip': 'zip', 'facility': 'facility', 'crossroad': 'crossroad', 'ete': 'ete', 'dtype': 'dtype', 'model': 'model', 'filename': 'filename', 'ltime': 'ltime', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'desc': 'desc', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'dir': 'dir', });
lyr_IndividualFarmerAvocaoFarm_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Distance': 'TextEdit', });
lyr_FicusMoraceaeNativeSpecies_2.set('fieldImages', {'type': 'TextEdit', 'ident': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'y_proj': 'TextEdit', 'x_proj': 'TextEdit', 'comment': 'TextEdit', 'display': 'TextEdit', 'symbol': 'TextEdit', 'dist': 'TextEdit', 'proximity': 'TextEdit', 'color': 'TextEdit', 'altitude': 'TextEdit', 'depth': 'TextEdit', 'temp': 'TextEdit', 'time': 'TextEdit', 'wpt_class': 'TextEdit', 'sub_class': 'TextEdit', 'attrib': 'TextEdit', 'link': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'zip': 'TextEdit', 'facility': 'TextEdit', 'crossroad': 'TextEdit', 'ete': 'TextEdit', 'dtype': 'TextEdit', 'model': 'TextEdit', 'filename': 'TextEdit', 'ltime': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'desc': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'Range', 'dir': 'TextEdit', });
lyr_IndividualFarmerAvocaoFarm_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Distance': 'no label', });
lyr_FicusMoraceaeNativeSpecies_2.set('fieldLabels', {'type': 'no label', 'ident': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'y_proj': 'no label', 'x_proj': 'no label', 'comment': 'no label', 'display': 'no label', 'symbol': 'no label', 'dist': 'no label', 'proximity': 'no label', 'color': 'no label', 'altitude': 'no label', 'depth': 'no label', 'temp': 'no label', 'time': 'no label', 'wpt_class': 'no label', 'sub_class': 'no label', 'attrib': 'no label', 'link': 'no label', 'state': 'no label', 'country': 'no label', 'city': 'no label', 'address': 'no label', 'zip': 'no label', 'facility': 'no label', 'crossroad': 'no label', 'ete': 'no label', 'dtype': 'no label', 'model': 'no label', 'filename': 'no label', 'ltime': 'no label', 'magvar': 'no label', 'geoidheigh': 'no label', 'desc': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsd': 'no label', 'dgpsid': 'no label', 'dir': 'no label', });
lyr_FicusMoraceaeNativeSpecies_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});