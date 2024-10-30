// tracking.js

// Sample data for parcel tracking
const parcelPoints = [
    { position: { lat: 6.5244, lng: 3.3792 }, status: 'Shipped', time: '08:00 AM' },
    { position: { lat: 7.3775, lng: 3.9470 }, status: 'In-Transit', time: '10:30 AM' },
    { position: { lat: 9.0765, lng: 7.3986 }, status: 'En Route', time: '02:00 PM' },
    { position: { lat: 10.3157, lng: 9.8440 }, status: 'Out for Delivery', time: '04:30 PM' },
    { position: { lat: 11.7460, lng: 13.0250 }, status: 'Delivered', time: '06:00 PM' }
];

// Function to initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 6.5244, lng: 3.3792 } // Centered on Lagos, Nigeria
    });

    // Plot each parcel point on the map
    parcelPoints.forEach(point => {
        const marker = new google.maps.Marker({
            position: point.position,
            map: map,
            icon: getIcon(point.status),
            title: `${point.status} - ETA: ${point.time}`
        });

        // Add an info window to show details
        const infoWindow = new google.maps.InfoWindow({
            content: `<h5>${point.status}</h5><p>ETA: ${point.time}</p>`
        });

        // Show the info window when the marker is clicked
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

// Function to select icon color based on status
function getIcon(status) {
    const colors = {
        "Shipped": "blue",
        "In-Transit": "orange",
        "En Route": "purple",
        "Out for Delivery": "yellow",
        "Delivered": "green"
    };
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: colors[status],
        fillOpacity: 0.8,
        scale: 10,
        strokeColor: "white",
        strokeWeight: 2
    };
}

// Load the map on page load
window.onload = initMap;
