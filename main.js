const checkbox = document.querySelector('#checkbox')
const dollarSpan = document.querySelectorAll('.toggle-span')

checkbox.addEventListener('change', e => {
    dollarSpan.forEach(e => {
        e.style.display === 'none' ? e.style.display = 'inline' : e.style.display = 'none'
    })
})