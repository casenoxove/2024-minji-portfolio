const big_bg = document.querySelector('.big_bg')
const detail_img = document.querySelectorAll('.detail_list img')
const big_img = document.querySelector('.big_bg img')
console.log(big_bg, detail_img, big_img)

big_bg.style.display = 'none' // 팝업 초기 숨기기

for(let detail_page of detail_img){
    detail_page.addEventListener('click',(e)=>{
        e.preventDefault()
        big_bg.style.display = 'block';
        document.body.style.overflow = 'hidden';
        big_img.src = detail_page.src
        // 클릭한 이미지의 경로 (src) 를 큰 이미지 팝업의 src로 대입하기
        big_bg.children[0].scrollTo(0,0)
        // 이전 팝업에서 내린 스크롤을 기억하지 않도록 스크로 위로 올리기
    })
}

big_bg.addEventListener('click',()=>{
    big_bg.style.display = 'none'
    document.body.style.overflow = '';
})


// 네비게이션


document.addEventListener('scroll', function() {
    const profileSection = document.getElementById('profile');
    const navbar = document.getElementById('navbar');
    const profilePosition = profileSection.getBoundingClientRect().top;

    if (profilePosition <= 0) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});