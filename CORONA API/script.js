function Fetchdata() {
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
        .then((res) => res.json())
        .then((data) => CardList(data.data.regional))
        .catch((err) => console.log(err))
}
Fetchdata()

function CardList(data) {
    const store = data.map((el) => SingleCard(el.loc, el.confirmedCasesIndian, el.confirmedCasesForeign, el.discharged, el.deaths, el.totalConfirmed))
        // console.log(store)
    document.getElementById("container").innerHTML = store.join("")
}

function SingleCard(loc, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths, totalConfirmed) {
    let card = `
    <div style="border: 2px solid black;">
    <h3>Location : ${loc}</h3>
    <h4>Cases Indian : ${confirmedCasesIndian}</h4>
    <h4>Cases Foreign : ${confirmedCasesForeign}</h4>
    <h4>Discharged : ${discharged}</h4>
    <h4>Deaths : ${deaths}</h4>
    <h4>Total Confirmed : ${totalConfirmed}</h4>
</div>
    `
    return card;
}