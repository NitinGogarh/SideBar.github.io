const bars = document.querySelector('.bar')
const  mains =document.querySelector('.main')
const cross = document.querySelector('.cross')
bars.addEventListener('click',nitin)
function nitin(){
    if(mains.className.includes('main1'))
    {
        mains.classList.add('main2')
        mains.classList.remove('main1')
        
    }
    else if(mains.className.includes('main2'))
    {
        mains.classList.add('main1')
        mains.classList.remove('main2')
        
    }
}
cross.addEventListener('click',nitin)