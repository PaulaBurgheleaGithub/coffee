const url = "https://api.sampleapis.com/coffee/hot";
const sel = document.getElementById("coffeeList");
const display = document.getElementById("output");

try {
  const response = await fetch(url);
  console.info("response:", response);

  if (!response.ok) throw response;

  const data = await response.json();
  console.table(data);

  const frag = document.createDocumentFragment();

  // added default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = " --Please choose-- ";
  frag.append(defaultOption);

  for (const drink of data) {
    const option = document.createElement("option");
    option.value = drink.id;
    option.textContent = drink.title;
    frag.append(option);
  }
  sel.replaceChildren(frag);

  sel.addEventListener("change", (e) => {
    const selectedOptions = sel.selectedOptions;
    const id = sel.value;
    const coffee = data.find((c) => {
      return c.id === Number(id);
    });

    //  console.log(coffee);
    displayDrinks(coffee);
  });
} catch (err) {
  console.error("err", err);
}

function displayDrinks(coffee, coffeeInfo = display) {
  coffeeInfo.innerHTML = `<div>
  	<h3>${coffee.title}</h3>
	<article>${coffee.description}
	<p>Ingredients: ${coffee.ingredients.join(", ")}</p>
	</article>
  </div>`;
  console.table(coffee.ingredients);
}
