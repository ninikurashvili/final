import{a as c}from"./chunk-AA7YHGA7.js";import{S as i,Y as n,ra as a}from"./chunk-3KFIUI6B.js";var u=(()=>{let e=class e{constructor(){this.selectedProductIdEmitter=new a,this.http=n(c),this.baseUrl="https://dummyjson.com/products",this.userUrl="http://dummyjson.com/users/add"}getByCategory(t){return this.http.get(`${this.baseUrl}/category/${t}`)}getByBrands(t){return this.http.get(`${this.baseUrl}/search?q=${t}`)}getProductById(t){return this.http.get(`${this.baseUrl}/${t}`)}addUser(t){let s={"content-type":"application/json"},o=JSON.stringify(t);return console.log(o),this.http.post(this.userUrl,o,{headers:s})}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{u as a};
