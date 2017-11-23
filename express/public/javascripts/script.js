
console.log("test");

var map = new naver.maps.Map('map', {
    center: new naver.maps.Point(4000, 2000),
    zoom: 1,
    mapTypeId: 'mine',
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: naver.maps.MapTypeControlStyle.DROPDOWN
    }
});


var ImageGalleryProjection = {
    fromCoordToPoint: function(coord) {
        var pcoord = coord.clone();

        if (coord instanceof naver.maps.LatLng) {
            pcoord = new naver.maps.Point(coord.lng(), coord.lat());
        }

        return pcoord.div(256, 256).div(16, 16);
    },

    fromPointToCoord: function(point) {
        return point.clone().mul(256, 256).mul(16, 16);
    }
};

var ImageGalleryType = new naver.maps.ImageMapType({
    name: 'ImageGallery',
    minZoom: 0,
    maxZoom: 4, 
    tileSize: new naver.maps.Size(256, 256),
    projection: ImageGalleryProjection,
    repeatX: false,
    tileSet: "{x}_{y}_{z}.jpg",
    background: '#000000',
});

map.mapTypes.set("mine", ImageGalleryType);
// map.setMapTypeId('IG');