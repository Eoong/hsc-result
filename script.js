const params = new URLSearchParams(window.location.search);
const status = params.get("status");

if (status === "error") {
window.location.href = "error.html";
}
