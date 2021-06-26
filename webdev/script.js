fetch('https://reqres.in/api/users/', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
})
.then(res => {
  if(res.ok) {
    console.log('success')
  } else {
    console.log('not success')
  }
})
.then(res => console.log(res))
.catch(error => console.error(error))