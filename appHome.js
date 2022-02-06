document.querySelectorAll('.link-menu').forEach(link => {
    const cont = document.querySelector('.cont')
    
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.getAttribute('wm-nav'))
            .then(resp => resp.text())
            .then(html => cont.innerHTML = html)
    }
})