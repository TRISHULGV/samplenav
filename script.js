 const button = document.querySelector('.open')
 button.addEventListener('click', () => {
    gsap.to('.ham',{x:350, y:0, ease:'power2', duraion:1.5})
    gsap.from('h1',{y:50, opacity:0, stagger: .2})
    gsap.from('a',{opacity:0, stagger: .2})
 })

const btn = document.querySelector('.close')
    btn.addEventListener('click', () => {
        gsap.to('.ham',{x:0, y:0, duration:.5})
        gsap.to('h1', 'a',{opacity:0})
    })
    
// components