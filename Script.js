const form = document.getElementById("bookingForm");
const responseMessage = document.getElementById("responseMessage");
form.addEventListener("submit", async (event) => {
event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const tickets = document.getElementById("tickets").value;
const bookingData = { name, email, tickets };
try {
const response = await fetch("http://localhost:3000/bookings", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(bookingData),
});
const result = await response.json();
if (response.ok) {
responseMessage.style.color = "green";
responseMessage.textContent = result.message;
} else {
responseMessage.style.color = "red";
responseMessage.textContent = result.error;
}
} catch (error) {
responseMessage.style.color = "red";
responseMessage.textContent = "An error occurred. Please try again later.";
}
});