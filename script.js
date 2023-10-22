var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate:15,
        strech:0,
        depth:300,
        modifier:1,
        slideShadows: true,
    },
    loop: true,
});


function showAlert(message){
    const alert = document.createElement('div');
    alert.className = 'custom-alert';
    alert.textContent = message;
    document.body.appendChild(alert);
   setTimeout(() => {
        alert.remove();
    }, 2500)
  
 }

 const $form = document.querySelector('#form')

 $form.addEventListener('submit', handleSubmit)

 async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok){ 
    this.reset()
    showAlert('Gracias por contactar a SANMED.')
    console.log('aqui estoy')
  }
}
