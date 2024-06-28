let map;

async function initMap() {

    // const iconMaps = '/public/img/ts-map-pin.svg';

    const { Map } = await google.maps.importLibrary("maps");

    const iconmap = {
        url: '/public/img/ts-map-pin.svg',
        scaledSize: new google.maps.Size(50, 50)
    };

    const markers = [
        {
            locationName: 'Gereja Roh Kudus',
            lat: -7.3371968,
            lng: 112.7856979,
            address: 'jln Abc 124</br>Surabaya.'
        },
        {

            locationName: 'Gereja Gembala Yang Baik',
            lat: -7.3301664,
            lng: 112.7356771,
            address: 'jln Abc 124</br>Surabaya.'
        },
        {
            locationName: 'Gereja St. Yosafat',
            lat: -7.3059608,
            lng: 112.7901025,
            address: 'jln Abc 124</br>Surabaya.'
        },
        {
            locationName: 'Gereja Salib Suci',
            lat: -7.3561178,
            lng: 112.7557463,
            address: 'jln Abc 124</br>Sidoarjo.'
        },
        {
            locationName: 'Gereja St. Paulus',
            lat: -7.379302,
            lng: 112.7349441,
            address: 'jln Abc 124</br>Sidoarjo.'
        },
    ];

    map = new Map(document.getElementById("map"), {
        center: { lat: -7.3371968, lng: 112.7856979 },
        zoom: 14,
        disableDefaultUI: true,
        // styles pakai snazzymaps.com
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#878787"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f9f5ed"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#aee0f4"
                    }
                ]
            }
        ]
    });

    const infoWindow = new google.maps.InfoWindow({
        minWidth: 200,
        maxWidth: 200
    });


    for (let i = 0; i < markers.length; i++) {

        const marker = new google.maps.Marker({
            position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
            map: map,
            icon: iconmap,
            animation: google.maps.Animation.DROP
        });
       
        // function createInfoWindows() {
        //     const infoWindowContent = `
        //     <div class="iconmap">
        //         <h3>${markers[i]['locationName']}</h3>
        //         <address>
        //             <p>${markers[i]['address']}</p>
        //         </address>
        //     </div>
        //     `;
        //     google.maps.event.addListener(marker, 'click', function () {
        //         infoWindow.setContent(infoWindowContent);
        //         infoWindow.open(map, marker);
        //     });

        // }

        // createInfoWindows();

        // infoWindow.addListener('closeclick', function () {
        //     map.fitBounds(bounds);
        // });

        // bounds.extend(new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']));
        // map.fitBounds(bounds);
    }
}


initMap();
