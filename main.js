let btn=document.querySelectorAll('.btn');
Array.from(btn).forEach(item => item.addEventListener('click', (e)=> {
    const btnUrl = e.target.getAttribute('data-url');
if(!btnUrl.includes('https://'||'http://')){
    btn=`https://${btnUrl}`

}
else {
    btn=btnUrl;
}
    window.location.href=btn;
}))

