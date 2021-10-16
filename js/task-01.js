const listCatId = document.querySelector('#categories');
//console.log(listCatId);

const itemEl = listCatId.children;
console.log(`Number of categories: ${itemEl.length}`);

const itemsRef = document.querySelectorAll('.item');
//console.log(itemsRef);
itemsRef.forEach(item => {
   console.log(`Category: ${item.querySelector('h2').textContent}`);
   console.log(`Elements: ${item.querySelectorAll('li').length}`);
  });