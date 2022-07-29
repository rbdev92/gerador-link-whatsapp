const action = document.getElementById('action')
const link_gerado = document.getElementById('link_gerado')
const username = document.getElementById('username')
const phoneNumber = document.getElementById('phoneNumber')
const message = document.getElementById('message')
const url = 'https://wa.me/'

action.addEventListener('click', changeText)

function changeText() {
  link_gerado.textContent = `Username: @${username.value}  ${url}${phoneNumber.value}?text=${message.value}`
}