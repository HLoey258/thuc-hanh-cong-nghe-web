const $ = document.querySelector.bind(document);
const btn = $('.btn');
btn.onclick = () => {
    btn.classList.toggle('clicked')
    if (btn.classList == 'btn clicked') {
        btn.innerText = "Click again"
    } else {
        btn.innerText = "Click me"
    }
}