const elList = document.querySelector(".cardd")

pokemons.forEach(function (item, index, arr) {
	let pokemonsLi = document.createElement('li');
  let pokName = document.createElement('h2');
  let pokimg = document.createElement('img');
  let pokWeight = document.createElement('strong');
  let pokHeigh = document.createElement('strong');
  let pokDiv = document.createElement('div');

  let poklink = document.createElement('a');

  let  pokweaknesses = document.createElement('ul');

  pokimg.setAttribute('src', item.img)
  pokimg.setAttribute('width', 100)
  pokName.textContent = item.name;
  pokWeight.textContent = `weight: ${item.weight}`;
  pokHeigh.textContent = `height: ${item.height}`;
  
  poklink.setAttribute('href', "#")
  poklink.classList.add("btn-primary")
  poklink.classList.add("btn")
  poklink.textContent = 'More'



  item.weaknesses.forEach(function(i){
    let weaknessesitem = document.createElement('li');
    weaknessesitem.textContent = i
    pokweaknesses.appendChild(weaknessesitem)

  })
 





  pokemonsLi.appendChild(pokimg)
  pokDiv.appendChild(pokName)
  pokDiv.appendChild(pokWeight)
  pokDiv.appendChild(pokHeigh)
  pokDiv.appendChild(poklink)
  pokDiv.appendChild(pokweaknesses)
  pokemonsLi.appendChild(pokDiv)

  elList.appendChild(pokemonsLi)
  pokemonsLi.classList.add('card')
pokDiv.classList.add("card-body")
pokimg.classList.add("card-img-top")
pokweaknesses .classList.add("weaknesses-list")
});