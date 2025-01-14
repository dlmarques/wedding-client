const guestsNumberInput = document.getElementById("guests-number");
const guestsDiv = document.getElementById("guests");

guestsNumberInput.addEventListener("change", (e) => {
  const number = e.target.value;
  guestsDiv.innerHTML = "";
  for (let i = 0; i < number; i++) {
    guestsDiv.innerHTML += `
    <h2 style="padding-top: 8px;">Convidado ${i + 1}</h2>
      <div style="padding-bottom: 8px; display: flex; flex-direction: column; gap: 8px; align-items: center; width:100%">
        <input type="text"  id="guest-name-${i + 1}" name="guest-name-${
      i + 1
    }" placeholder="Nome" required>
        <select name="guest-age-${i + 1}" id="guest-age-${i + 1}">
        <option disabled selected>Faixa etária</option>
              <option value="0-3 anos">0-3 anos</option>
              <option value="4-9 anos">4-9 anos</option>
              <option value="Adulto">Adulto (+10 anos)</option>
        </select>
         <select name="guest-diet-${i + 1}" id="guest-diet-${i + 1}">
         <option disabled selected>Dieta</option>
              <option value="Normal">Normal</option>
              <option value="Vegetariano">Vegetariano</option>
              <option value="Vegan">Vegan</option>
        </select>
      </div>
    `;
  }
});

document
  .getElementById("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = {};
    const guests = [];

    formData.forEach((value, key) => {
      if (
        key.startsWith("guest-name-") ||
        key.startsWith("guest-diet-") ||
        key.startsWith("guest-age-") ||
        key.startsWith("guests-number")
      ) {
        const [type, index] = key.split("-").slice(1);

        if (!guests[index - 1]) {
          guests[index - 1] = {};
        }

        switch (true) {
          case key.startsWith("guest-name-"):
            guests[index - 1].nome = value;
            break;
          case key.startsWith("guest-age-"):
            guests[index - 1].idade = value;
            break;
          case key.startsWith("guest-diet-"):
            guests[index - 1].dieta = value;
            break;
          default:
            break;
        }
      } else {
        data[key] = value;
      }
    });

    data.guests = guests;

    try {
      const response = await fetch(
        "https://wedding-server-xjqv.onrender.com/api/confirm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const form = document.getElementById("form");
        form.innerHTML = "";
        form.innerHTML = `<p>Contamos contigo!</p>`;
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  });
