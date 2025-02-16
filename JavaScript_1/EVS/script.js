// Environmental Tips
const tips = [
    "Use reusable bags instead of plastic bags.",
    "Turn off lights when not in use.",
    "Plant trees to reduce carbon footprint.",
    "Use public transport or carpool to reduce emissions.",
    "Recycle paper, plastic, and glass.",
  ];
  
  const tipsList = document.getElementById('tips');
  tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });
  
  // Pollution Levels
  const pollutionLevels = [
    { level: "Good", color: "green", value: "Low" },
    { level: "Moderate", color: "orange", value: "Medium" },
    { level: "Bad", color: "red", value: "High" },
  ];
  
  const pollutionDiv = document.getElementById('pollution-levels');
  pollutionLevels.forEach(level => {
    const div = document.createElement('div');
    div.className = `pollution-level ${level.color}`;
    div.innerHTML = `<strong>${level.level}</strong><br>${level.value}`;
    pollutionDiv.appendChild(div);
  });
  
  // Carbon Footprint Calculator
  function calculateFootprint() {
    const distance = parseFloat(document.getElementById('distance').value);
    if (isNaN(distance) || distance < 0) {
      alert("Please enter a valid distance!");
      return;
    }
  
    const footprint = distance * 0.2; // 0.2 kg CO2 per km
    const resultDiv = document.getElementById('footprint-result');
    resultDiv.textContent = `Your carbon footprint is ${footprint.toFixed(2)} kg CO2.`;
  
    // Color coding based on footprint
    if (footprint < 50) {
      resultDiv.style.color = "#32cd32"; // Green
    } else if (footprint >= 50 && footprint < 100) {
      resultDiv.style.color = "#ffa500"; // Orange
    } else {
      resultDiv.style.color = "#ff4500"; // Red
    }
  }