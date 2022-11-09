var sidemenu = document.getElementById("side-menu")


function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-250px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwpjIsj55ajORq_kpcoFsEwfXkWzKib-MCNLqytojzycAxSF1sz7jU6LrgxzZ-I4VpR/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
