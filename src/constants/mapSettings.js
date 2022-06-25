const mapSettings = {
  clickableIcons: false,
  streetViewControl: false,
  panControlOptions: false,
  gestureHandling: 'cooperative',
  backgroundColor: '#FFAD00',
  mapTypeControl: false,
  zoomControlOptions: {
    style: 'SMALL',
  },
  zoom: 5,
  minZoom: 2,
  maxZoom: 8,
  styles: [
    {
      featureType: 'landscape',
      stylers: [
        { hue: '#FFAD00' },
        { saturation: 50.2 },
        { lightness: -34.8 },
        { gamma: 1 },
      ],
    },
    {
      featureType: 'poi',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'road.highway',
      stylers: [
        { hue: '#FFAD00' },
        { saturation: -19.8 },
        { lightness: -1.8 },
        { gamma: 1 },
      ],
    },
    {
      featureType: 'road.arterial',
      stylers: [
        { hue: '#FFAD00' },
        { saturation: 72.4 },
        { lightness: -32.6 },
        { gamma: 1 },
      ],
    },
    {
      featureType: 'road.local',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'transit',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.province',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.locality',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.province',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.neighborhood',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [{ visibility: 'on' }, { color: 'rgb(195,230,255)' }],
    },
    {
      featureType: 'administrative',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'water',
      stylers: [
        { hue: 'rgb(77,109,155)' },
        { saturation: -63.2 },
        { lightness: 38 },
        { gamma: 1 },
      ],
    },
  ],
}

export { mapSettings }
