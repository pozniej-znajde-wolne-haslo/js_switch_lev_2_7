const productList = document.getElementById('mylist');
let infoAboutProductsOutput = document.getElementById('masse');

function showtxt() {
  let productListInput = productList.value; // need to get the value of the select-field!
  console.log(productListInput);
  
  switch (productListInput) {
    case "0":
      infoAboutProductsOutput.innerHTML = "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm"; 
      // backticks gehen auch bei 'output'
      break;
    case "1":
      infoAboutProductsOutput.innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
      break;
    case "2": 
      infoAboutProductsOutput.innerHTML = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm";
      break;
    case "3":
      infoAboutProductsOutput.innerHTML = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm";
      break;
    default:
      infoAboutProductsOutput.innerHTML = "<b>Extra große Größe</b>";
  }

}


