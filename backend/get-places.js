var request = require('sync-request')
var fs = require('fs')

var makeGooglePlacesSearchURL = function(location, radius, type, key){
    var baseURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/';
    var output = 'json';
    var fullURL = baseURL + output + '?' + 'key=' + key + '&' + 'location=' + location + '&' + 'radius=' + radius + '&' + 'type=' + type  
    return fullURL
}

var makeGooglePlacesPhotoURL = function(photoReference, key){
    var baseURL = 'https://maps.googleapis.com/maps/api/place/photo?';
    var maxHeight = 400;
    var fullURL = baseURL + 'key=' + key + '&' + 'maxheight=' + maxHeight + '&' + 'photoreference=' + photoReference;
    return fullURL;
}

var callAPI = function(url) {
   var response = request('GET', url);
    return response.body;
}

var getJSONFromAPI = function(url) {
    var responseBody = callAPI(url); 
    return JSON.parse(responseBody.toString());
}

// Usage: getPlaceAttribute(response, photoReferenceGetter)
var nameGetter = function(place){return place['name'];}
var photoReferenceGetter = function(place){return place['photos'][0]['photo_reference']}
var getPlaceAttribute = function (response, attributeGetter) {
    return response.results.map(attributeGetter);
}

// Download restaurant pictures in an area around lat/lon.
var key = JSON.parse(fs.readFileSync('key.json', 'utf8'))['key'];
var latLon = process.argv[2] + ',' + process.argv[3]   // 40.684478,-73.941467

console.log('Pinging Google Places Search API')
var searchUrl = makeGooglePlacesSearchURL(latLon, '1000', 'restaurant', key);
var places = getJSONFromAPI(searchUrl)['results'];

console.log('Found restaraunts near ' + latLon)
places.forEach(function(place) {
    var name =  place['name'];
    var photoReference = place['photos'][0]['photo_reference'];
    var photoURL = makeGooglePlacesPhotoURL(photoReference, key);

    console.log('Downloading picture for ' + name)
    var responseBody = callAPI(photoURL);
    fs.writeFile("img/" + name + ".png", responseBody, function(err){console.log('Saved picture for ' + name);});
})