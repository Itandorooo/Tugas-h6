let items = [
    ["001", "Lucitik", "Rp 100.000", "Skibidi Sigma Mewing Crypto", "lucitik.jpg"],
    ["002", "Haiber Ikis Ikis Ikiss", "Rp 1.000.000", "Ff.Hengker.Wibu.Ff.Tzy", "hengker.jpg"],
    ["003", "Tipi Roblok", "Free", "Sikma Mweing Ohio Fanum tax Skibidi", "tipi.jpg"],
    ["004", "Mousepad Albedoo", "Rp 199.000", "Tolong belikan saya inii!!", "tolong.jpg"],
  ];
  let card = document.getElementById("wrap");
  let list = document.getElementById("listBarang");
  let i = 0;
  let qty = (document.getElementById("qty").innerHTML = "(" + i + ")");
  
  // memunculkan item
  items.forEach(function (item) {
    let cardEl =
      '<div class="card mx-1" style="width: 18rem;" id="card"><img src=asset/' +
      item[4] +
      ' class="card-img-top" height="200px" width="200px" alt="..."><div class="card-body"><h5 class="card-title" id="itemName">' +
      item[1] +
      '</h5><p class="card-text" id="itemDesc">' +
      item[3] +
      '</p><p class="card-text">' +
      item[2] +
      '</p><a href="#" class="btn btn-primary" id="addCart" onclick="add()">add to card</a></div></div>';
    list.innerHTML += cardEl;
  });
  
  // function menambah card
  function add() {
    i++;
    document.getElementById("qty").innerHTML = "(" + i + ")";
  }
  
  // FUNCTION MENCARI ITEM
  document.getElementById("formItem").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let keyword = document.getElementById("keyword").value.toLowerCase();
    let filter = items.filter(function (item) {
      return item[1].toLowerCase().includes(keyword);
    });
    list.innerHTML = " ";
  
    filter.forEach(function (item) {
      let cardEl =
        '<div class="card mx-1" style="width: 18rem;" id="card"><img src=asset/' +
        item[4] +
        ' class="card-img-top" height="200px" width="200px" alt="..."><div class="card-body"><h5 class="card-title" id="itemName">' +
        item[1] +
        '</h5><p class="card-text" id="itemDesc">' +
        item[3] +
        '</p><p class="card-text">' +
        item[2] +
        '</p><a href="#" class="btn btn-primary" id="addCart" onclick="add()">add to card</a></div></div>';
      list.innerHTML += cardEl;
    });
  });