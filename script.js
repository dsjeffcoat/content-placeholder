const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://source.unsplash.com/random/" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit!'
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="" />'
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Jan 1, 2021'

    animatedBgs.forEach(bg => {
        bg.classList.remove('animated-bg')
    })

    animatedBgTexts.forEach(txt => {
        txt.classList.remove('animated-bg-text')
    })
}