const OWNER_WHATSAPP = "7355304094"; // Replace with your WhatsApp number

const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const vehicle = document.getElementById("vehicle").value;
    const model = document.getElementById("model").value;
    const packageName = document.getElementById("package").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const address = document.getElementById("address").value;

    const bookingId = "SH" + Date.now();

    const whatsappMessage = `
*NEW BOOKING - SHINEHUB*

Booking ID: ${bookingId}

Customer Name: ${name}
Mobile Number: ${phone}
Vehicle: ${vehicle}
Vehicle Model: ${model}
Package: ${packageName}
Booking Date: ${date}
Booking Time: ${time}
Address: ${address}
`;

    const whatsappURL =
        `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`;

    message.textContent =
        "Your booking details are ready. Press SEND in WhatsApp to confirm.";

    window.open(whatsappURL, "_blank");
});