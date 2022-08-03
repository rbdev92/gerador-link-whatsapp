const action = document.getElementById('action')
const link_gerado = document.getElementById('link_gerado')
const phoneNumber = document.getElementById('phoneNumber')
const message = document.getElementById('message')
const url = 'https://linkz.pro/'

action.addEventListener('click', changeText)

function changeText() {
  link_gerado.textContent = `${url}55${phoneNumber.value}?text=${message.value}`
}