//**js'ten hktml'e class ve id isimler ile ualşıyoruz**
const searchForm = document.querySelector(".search-form");          //html'deki 45.satır search-form class'a ulaşma (search işareti için)
const cartItem = document.querySelector(".cart-items-container");   //html'de 55.satır cart-items-container class'a ulaşma (sepet işareti için)
const navbar = document.querySelector(".navbar");                   //html'de 24.satırden (sepet işareti için)
//**buttons**
const searchBtn = document.qrerySelector("#search-btn");            //(#) id'nin işareti - html'de 34.satır search-btn (buttonu) id'sine ulaşma
const cartBtn = document.qrerySelector("#cart-btn");                //(#) id'nin işareti - html'de 37.satır cart-btn (buttonu) id'sine ulaşma
const menuBtn = document.qrerySelector("#menu-btn");
//**45.satırin class'ına ("inen seaech işareti") active yazısını eklemek için**
cartBtn.addEventListener("click", function () {                    
    searchForm.classList.toggle("active");                          //search işaretine tıklayınca inan search eklensin bir daha tıklayınca silinsin
    document.addEventListener("click", function (e) {           
        if(
            !e.composedPath().includes(searchBtn) &&                //serch işaretine hariç bir yere tıklayınca inen search silinsin
            !e.composedPath().includes(searchForm)                  
        ){
            searchForm.classList.remove("active");                  //inen search içine tıklayınca silinmesin
        } 
    });
});
//**55.satırin class'ına ("sepete işareti") active yazısını eklemek için**
cartBtn.addEventListener("click", function () {                    
    cartItem.classList.toggle("active");                          
    document.addEventListener("click", function (e) {           
        if(
            !e.composedPath().includes(cartBtn) &&                
            !e.composedPath().includes(cartItem)                  
        ){
            cartItem.classList.remove("active");
        } 
    });
});
//**24.satırin class'ına ("üst süte üç çizgi işareti") active yazısını eklemek için **
menuBtn.addEventListener("click", function () {                   
    navbar.classList.toggle("active");                          
    document.addEventListener("click", function (e) {           
        if(
            !e.composedPath().includes(menuBtn) &&                
            !e.composedPath().includes(navbar)                  
        ){
            navbar.classList.remove("active");
        } 
    });
});