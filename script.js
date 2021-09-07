window.onload(()=>{
    const button = document.querySelector('#send-message');
    button.addEventListener('click',()=>{
        fetch('https://test-server-laxable.herokuapp.com/test.php',{
            body: JSON.stringify({'NAME':'ALEX'})
        })
        .then(resp=>{console.log(resp)})
        .catch(error=>console.log(error))
    })
})