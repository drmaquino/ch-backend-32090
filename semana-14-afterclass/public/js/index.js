document.getElementById('btnFormSubmit').addEventListener('click', async e => {
    e.preventDefault()

    const username = document.getElementById('input_username').value
    const password = document.getElementById('input_password').value

    const res = await fetch('/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username, password })
    })

    const content = await res.text()
    document.getElementById('content').innerHTML = content
})