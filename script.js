function getRandomsystems(userList, count) {
  const shuffled = [...userList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

document.getElementById('pick-systems').addEventListener('click', () => {
  const premiumsystemsInput = document.getElementById('premium-systems').value;
  const normalsystemsInput = document.getElementById('normal-systems').value;

  const premiumsystems = premiumsystemsInput.split(',').map(user => user.trim()).filter(Boolean);
  const normalsystems = normalsystemsInput.split(',').map(user => user.trim()).filter(Boolean);

  if (premiumsystems.length < 3 || normalsystems.length < 3) {
    alert('Each category must have at least 3 systems!');
    return;
  }

  // Show spinners
  const premiumSpinner = document.getElementById('premium-spinner');
  const normalSpinner = document.getElementById('normal-spinner');
  premiumSpinner.style.display = 'block';
  normalSpinner.style.display = 'block';

  // Delay for the spinning effect
  setTimeout(() => {
    const selectedPremium = getRandomsystems(premiumsystems, 3);
    const selectedNormal = getRandomsystems(normalsystems, 3);

    document.getElementById('selected-premium').textContent = selectedPremium.join(', ');
    document.getElementById('selected-normal').textContent = selectedNormal.join(', ');

    // Hide spinners after selection
    premiumSpinner.style.display = 'none';
    normalSpinner.style.display = 'none';
  }, 1000); // 3 seconds for the spinning effect
});
