const firebaseConfig = {
    apiKey: "AIzaSyB57MTdfQi2vflmZq_1HY18O_pDa82Z-qk",
    authDomain: "pokemon-c6e28.firebaseapp.com",
    projectId: "pokemon-c6e28",
    storageBucket: "pokemon-c6e28.appspot.com",
    messagingSenderId: "581983076776",
    appId: "1:581983076776:web:b5c2247a109adb56bf1d9d",
    measurementId: "G-7YJ24WZ289"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },
      zoom: 2
  });

  const form = document.getElementById('reportForm');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const species = form.querySelector('#pokemonSpecies').value;
      const latitude = parseFloat(form.querySelector('#latitude').value);
      const longitude = parseFloat(form.querySelector('#longitude').value);
      addSighting(species, latitude, longitude);
      form.reset();
  });

  function addSighting(species, latitude, longitude) {
      db.collection("sightings").add({
          species: species,
          location: new firebase.firestore.GeoPoint(latitude, longitude),
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }

  db.collection("sightings").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
          const sighting = change.doc.data();
          const marker = new google.maps.Marker({
              position: { lat: sighting.location.latitude, lng: sighting.location.longitude },
              map: map,
              title: sighting.species,
              icon: 'https://via.placeholder.com/24/ff0000/ffffff?text=' + sighting.species.charAt(0)
          });

          marker.setAnimation(google.maps.Animation.DROP);

          const infowindow = new google.maps.InfoWindow({
              content: `<h3 style="color: #333;">${sighting.species}</h3><p style="color: #777;">Location: ${sighting.location.latitude}, ${sighting.location.longitude}</p>`,
              maxWidth: 200,
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '10px'
          });

          marker.addListener('click', () => {
              infowindow.open(map, marker);
          });
      });
  });