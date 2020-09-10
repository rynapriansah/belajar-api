class SearchBar extends HTMLElement {
   connectedCallback(){
       this.render();
   }
  
   set clickEvent(event) {
       this._clickEvent = event;
       this.render();
   }
 
   get value() {
       return this.querySelector("#searchElement").value;
   }
 
   render() {
       this.innerHTML = `
       <div class="row mt-3 justify-content-center">
    <div class="col-md-8">
        <marquee><h1 align="center" style="color:red" >Search Xdrink</h1></marquee>
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Name drink" id="searchElement">
  <div class="input-group-append">
    <button class="btn btn-dark" type="button" id="searchButtonElement">Search</button>
  </div>
</div>
</div>
</div>
       `;
 
       this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
   }
}
 
customElements.define("search-bar", SearchBar);