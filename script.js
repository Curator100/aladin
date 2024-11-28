document.getElementById('clickGif').addEventListener('click', () => {
  const genieReveal = document.getElementById('genieReveal');
  const formSection = document.getElementById('formSection');

  // Show the genie GIF
  genieReveal.classList.remove('hidden');

  // Hide the clickable GIF and text
  document.querySelector('.overlay').classList.add('hidden');

  // Show the form after 5 seconds
  setTimeout(() => {
    genieReveal.classList.add('hidden'); // Hide the final GIF
    formSection.classList.remove('hidden'); // Show the form
  }, 5000);
});

document.getElementById('wishForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const wish = document.getElementById('wish').value;

  const botToken = '7447671480:AAFtEWOh_y3k5UpIeUnV-5fJdV3L-RlqC6M';
  const chatId = '906269717';

  const message = `Name: ${name}\nAddress: ${address}\nWish: ${wish}`;

  // Send message to Telegram
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  alert('Your wish has been sent to the genie!');
  e.target.reset();
});
