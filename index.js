let currentSlide=0;
function showSlide()
{
    const wrapper = document.querySelector('.slider-wrapper')
    const sliderWidth = document.querySelector('.slider-slide').clientWidth;
    wrapper.style.transform = `translateX(${-currentSlide * sliderWidth}px)`
}

function prevSlide(){
    if(currentSlide > 0){
        currentSlide--;
    }
    else{
        currentSlide=2;
    }
    showSlide();
}
function nextSlide(){
    if(currentSlide < 2){
        currentSlide++;
    }
    else{
        currentSlide=0;
    }
    showSlide();
}
