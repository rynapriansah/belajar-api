class DrinkItem extends HTMLElement {
   
   set drink(drink) {
       this._drink = drink;
       this.render();
   }


 
   render() {
       this.innerHTML = `
      <style>
  div.gallery {
  margin: 5px;
  border: 6px solid #ccc;
  float: left;
  width: 250px;
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: 100%;
}

div.desc {
  padding: 20px;
  color: red;
  text-align: center;
}
h3 {
  padding: 20px;
  color: red;
  text-align: center;
}
</style>
<div class="gallery">
  
    <img src="${this._drink.strDrinkThumb}">
  <h3> ${this._drink.strDrink}</h3> 
</div>`;
   }
}
 
customElements.define("drink-item", DrinkItem);