async function loadImage() {
    try{
        const responce = await fetch('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?')
        if (!responce.ok) {
            throw new Error('Помилка сервера')
        }
        const img = document.createElement('img');
        img.src = responce.url;
        img.alt = 'Some image'
        img.width = 600;

        const image = document.getElementById('image');
        image.innerHTML = '';
        image.appendChild(img);
    } catch (error){
        console.error('Error loading image', error);
    }
}

document.getElementById('load-image').addEventListener('click', loadImage);