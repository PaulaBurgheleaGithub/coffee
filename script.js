// console.log(sel[1]);
const url = "https://api.sampleapis.com/coffee/hot";

try {
  const response = await fetch(url);
  console.log("response:", response);

  if (!response.ok) throw response;

  const data = await response.json();
  console.log("data:", data);
  const sel = document.getElementById("coffeeList");
  const frag = document.createDocumentFragment();

  // ADDED DEFAULT OPTION
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = " --Please choose-- ";
  frag.append(defaultOption);

  for (const drink of data) {
    const option = document.createElement("option");
    option.value = drink.id;
    option.textContent = drink.title;
    console.log(option);
    frag.append(option);
  }
  sel.replaceChildren(frag);
} catch (err) {
  console.log("err", err);
}

// function displayDrinks(display = document.getElementById("output")) {
//   const selectedDrink = document.getElementsByTagName("option");
//   selectedDrink.addEventListener("click", () => {
//     display.textContent = selectedDrink;
//   });
// }
