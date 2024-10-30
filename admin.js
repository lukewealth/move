// admin.js

// Sample data for shipments
const shipments = [
    { id: "001", currentStatus: "Shipped", destinations: ["Shipped", "In-Transit", "En Route", "Out for Delivery", "Delivered"] },
    { id: "002", currentStatus: "In-Transit", destinations: ["Shipped", "In-Transit", "En Route", "Out for Delivery", "Delivered"] },
    { id: "003", currentStatus: "En Route", destinations: ["Shipped", "In-Transit", "En Route", "Out for Delivery", "Delivered"] }
];

// Function to load shipment data into the HTML
function loadShipments() {
    const shipmentList = document.getElementById("shipment-list");
    shipmentList.innerHTML = '';

    // Create HTML elements for each shipment
    shipments.forEach(shipment => {
        const shipmentItem = document.createElement("li");
        shipmentItem.className = "shipment-item";

        shipmentItem.innerHTML = `
            <span><strong>Parcel ID:</strong> ${shipment.id}</span>
            <span><strong>Status:</strong> 
                <select id="status-${shipment.id}" onchange="updateStatus('${shipment.id}')">
                    ${shipment.destinations.map(status => `
                        <option value="${status}" ${shipment.currentStatus === status ? 'selected' : ''}>${status}</option>
                    `).join('')}
                </select>
            </span>
        `;
        shipmentList.appendChild(shipmentItem);
    });
}

// Function to update the status of a parcel
function updateStatus(id) {
    const statusSelect = document.getElementById(`status-${id}`);
    const updatedStatus = statusSelect.value;

    // Find the shipment and update its status
    const shipment = shipments.find(s => s.id === id);
    if (shipment) shipment.currentStatus = updatedStatus;

    // Notify the admin about the update
    alert(`Parcel ID ${id} updated to ${updatedStatus}`);
}

// Load shipments when the page is ready
window.onload = loadShipments;
