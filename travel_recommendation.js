// =========================
// FETCH JSON
// =========================

let travelData = {};

fetch("travel_recommendation_api.json")

.then(response => response.json())

.then(data => {

    travelData = data;

    console.log("Datos cargados:", data);

})

.catch(error => {

    console.log("Error cargando JSON:", error);

});


// =========================
// HOME
// =========================

function showHome() {

    document.getElementById("home-content").style.display = "block";

    document.getElementById("about-content").style.display = "none";

    document.getElementById("contact-content").style.display = "none";
}


// =========================
// ABOUT
// =========================

function showAbout() {

    document.getElementById("home-content").style.display = "none";

    document.getElementById("about-content").style.display = "flex";

    document.getElementById("contact-content").style.display = "none";
}


// =========================
// CONTACT
// =========================

function showContact() {

    document.getElementById("home-content").style.display = "none";

    document.getElementById("about-content").style.display = "none";

    document.getElementById("contact-content").style.display = "flex";
}


// =========================
// SEARCH
// =========================

function search() {

    const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

    const results =
    document.getElementById("results");

    results.innerHTML = "";


// =========================
// PLAYAS
// =========================

    if (
        input.includes("playa")
    ) {

        showResults(travelData.playas);
    }


// =========================
// TEMPLOS
// =========================

    else if (
        input.includes("templo")
    ) {

        showResults(travelData.templos);
    }


// =========================
// PAISES
// =========================

    else if (

        input.includes("pais") ||
        input.includes("paises") ||
        input.includes("país") ||
        input.includes("países")

    ) {

        showCountries(travelData.paises);
    }


// =========================
// NO RESULTS
// =========================

    else {

        results.innerHTML = `

            <p style="
                font-size:24px;
                color:white;
                padding:20px;
            ">

                No recommendations found.

            </p>

        `;
    }
}


// =========================
// SHOW PLAYAS + TEMPLOS
// =========================

function showResults(list) {

    const results =
    document.getElementById("results");

    results.innerHTML = "";

    list.forEach(place => {

        const description =

            place.descripcion ||

            "No description available";

        results.innerHTML += `

            <div class="card">

                <img
                src="${place.imageUrl}"
                alt="${place.nombre}">

                <h3>${place.nombre}</h3>

                <p>${description}</p>

            </div>

        `;
    });
}


// =========================
// SHOW COUNTRIES
// =========================

function showCountries(countries) {

    const results =
    document.getElementById("results");

    results.innerHTML = "";

    countries.forEach(country => {

        country.ciudades.forEach(city => {

            const description =

                city.descripcion ||

                "No description available";

            results.innerHTML += `

                <div class="card">

                    <img
                    src="${city.imageUrl}"
                    alt="${city.nombre}">

                    <h3>${city.nombre}</h3>

                    <p>${description}</p>

                </div>

            `;
        });
    });
}


// =========================
// RESET
// =========================

function resetSearch() {

    document.getElementById("searchInput").value = "";

    document.getElementById("results").innerHTML = "";
}