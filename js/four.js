console.log('class')

document.getElementById('hadler').addEventListener('click', function makeChange(){
    const title = document.getElementById('title');
    title.innerText = 'changed by event handler'
})

document.getElementById('btn-login').addEventListener('click', function user(){
    const userinfo = document.getElementById('user');
    userinfo.innerText= 'One user'
})