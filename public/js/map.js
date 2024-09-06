  mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
    container: 'map',
    center: listing.geometry.coordinates,
    zoom: 8,
  });



  const marker = new mapboxgl.Marker( {color: "red"} )
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({offset: 25}).setHTML(
            `<b><h4>${listing.title}<h4><p>Exact Location provided will be after booking<p></b>`
          )
        )
        .addTo(map);