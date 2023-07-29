const baseLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const contenant = document.querySelector('#container')

for (let i = 1 ; i <= 151; i ++) {
    
    const Pokemon = document.createElement('div');
    Pokemon.classList.add('pokemon');
    
    const image = document.createElement('img');
    image.src = `${baseLink}${i}.png`;
    
    const texte = document.createElement('span');
    texte.textContent = `#${i}`;
    
    Pokemon.appendChild(image);
    Pokemon.appendChild(texte);
    contenant.appendChild(Pokemon)
}
