const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  button.disabled = true;
  button.textContent = "Checking...";
  result.textContent = "Connecting to the serverless service...";

  try {
    const response = await fetch("/.netlify/functions/wellness-status");

    if (!response.ok) {
      throw new Error("Service request failed");
    }

    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    result.textContent =
      "Connection unavailable. Please try again after deployment.";
  } finally {
    button.disabled = false;
    button.textContent = "Check Wellness Service";
  }
});
