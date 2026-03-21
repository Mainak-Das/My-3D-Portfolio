fetch('http://127.0.0.1:3000/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Test', email: 'test@example.com', message: 'Hello' })
})
.then(res => res.json())
.then(data => console.log('RESPONSE:', JSON.stringify(data, null, 2)))
.catch(err => console.error('ERROR:', err));
