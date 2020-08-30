var pname = document.getElementById("Pname");
var pprice = document.getElementById("Pprice");
var pcom = document.getElementById("Pcom");
var pdesc = document.getElementById("Pdesc");
var search = document.getElementById("Search");
var searchBtn = document.getElementById("searchProduct");
var currentIndex = 0;
var searchRow = document.getElementById("searchrow");
var addbtn = document.getElementById("addBtn");
var rowid = document.getElementById("productsrow");
var clearall = document.getElementById("clearall");
var productsContainer;

if (localStorage.getItem("productsContainer") == null) {
  productsContainer = [];
} else {
  productsContainer = JSON.parse(localStorage.getItem("productsContainer"));
  displayData();
}

addbtn.onclick = function () {
  if (addbtn.innerHTML == "Add Product") {
    addProduct();
    displayData();
    //  clearForm()
  } else {
    updateProduct();
    displayData();
    // clearForm();
  }
};

function addProduct() {
  var product = {
    name: pname.value,
    price: pprice.value,
    company: pcom.value,
    desc: pdesc.value,
  };
  productsContainer.push(product);
  localStorage.setItem("productsContainer", JSON.stringify(productsContainer));
}

function displayData() {
  let txt = "";
  for (let i = 0; i < productsContainer.length; i++) {
    if (productsContainer.length == 0) {
      break;
    } else {
      txt += `<div class="col-lg-3 col-md-2 py-1 m-2 text-center border border-primary rounded">
         <div class="product">
           <h3 class="">${productsContainer[i].name}</h3>
           <h4>${productsContainer[i].price}</h4>
           <p>${productsContainer[i].company}</p>
           <p>${productsContainer[i].desc}</p>
           <button class="btn btn-danger" id="Delete" onclick="deleteProduct(${i})">Delete</button>
           <button class="btn btn-primary" id="Update"onclick="setForm(${i})">Update</button>
        </div>
        </div>`;
      rowid.innerHTML = txt;
    }
  }
}

function clearForm() {
  var inputs = document.getElementsByClassName("form-control");
  for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
}

function deleteProduct(index) {
  if (productsContainer.length == 1 || productsContainer.length == 0) {
    productsContainer.splice(0, 1);
    localStorage.setItem(
      "productsContainer",
      JSON.stringify(productsContainer)
    );
    rowid.innerHTML = "";
  } else {
    productsContainer.splice(index, 1);
    localStorage.setItem(
      "productsContainer",
      JSON.stringify(productsContainer)
    );
    displayData();
    searchProducts(search.value);
    if (search.value == "") searchRow.innerHTML = "";
  }
}

function updateProduct() {
  productsContainer[currentIndex].name = pname.value;
  productsContainer[currentIndex].price = pprice.value;
  productsContainer[currentIndex].company = pcom.value;
  productsContainer[currentIndex].desc = pdesc.value;
  addbtn.innerHTML = "Add Product";
  localStorage.setItem("productsContainer", JSON.stringify(productsContainer));
  searchProducts(search.value);
  if (search.value == "") searchRow.innerHTML = "";
}
function setForm(index) {
  pname.value = productsContainer[index].name;
  pprice.value = productsContainer[index].price;
  pcom.value = productsContainer[index].company;
  pdesc.value = productsContainer[index].desc;
  addbtn.innerHTML = "Update Product";
  currentIndex = index;
}
search.onkeyup = function () {
  searchProducts(search.value);
  if (search.value == "") searchRow.innerHTML = "";
};
function searchProducts(term) {
  var cols = "";
  for (var i = 0; i < productsContainer.length; i++) {
    if (productsContainer[i].name.includes(term)) {
      cols += `<div class="col-lg-3 col-md-2 py-1 m-2 text-center border border-warning  rounded">
            <div class="product">
            <h3 class="">${productsContainer[i].name}</h3>
            <h4>${productsContainer[i].price}</h4>
            <p>${productsContainer[i].company}</p>
            <p>${productsContainer[i].desc}</p>
            <button class="btn btn-danger" id="Delete" onclick="deleteProduct(${i})">Delete</button>
            <button class="btn btn-primary" id="Update"onclick="setForm(${i})">Update</button>
             </div>
            </div>`;
    }
  }
  searchRow.innerHTML = cols;
}
clearall.onclick = function () {
  if (localStorage.getItem("productsContainer") != null)
    localStorage.clear("productsContainer");
  rowid.innerHTML = "";
};
