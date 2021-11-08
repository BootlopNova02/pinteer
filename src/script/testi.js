const testimonialsContainer = document.querySelector('.testimonial-konten');
const testimonial = document.querySelector('.testimonial');
const profileImage = document.querySelector('.profile-image');
const username = document.querySelector('.name');
const role = document.querySelector('.role');

const progressBar = document.querySelector('.progress-bar');


const testimonials = [
    {
        names: 'Name 2',
        position: 'anak magang',
        photo: 'image/profile1.png',
        text: "dipisicing elit. Ducimus neque quos quas qui commodi rem, autem aperiam laborum et at hic ullam, dolores omnis tempore labore voluptatum itaque! Adipisci nisi nulla voluptatem sed totam molestiae ullam maiores eum",
    },
    {
        names: 'Name 3',
        position: 'anak yang akan magang',
        photo: 'image/profile1.png',
        text: "Ducimus neque quos quas qui commodi rem, autem aperiam laborum et at hic ullam, dolores omnis tempore labore voluptatum itaque! Adipisci nisi nulla voluptatem sed totam molestiae ullam maiores eum dipisicing elit. ",
    },
];

let index = 0;

updateTestimonial();

function updateTestimonial() {
    progressBar.addEventListener('animationiteration', () => {
        const { names, position, photo, text } = testimonials[index]
        testimonial.innerHTML = text
        profileImage.src = photo
        username.innerHTML = names
        role.innerHTML = position

        index++

        if(index > testimonials.length - 1) {
            index = 0
        }
    })
}