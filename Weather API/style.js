function Fetchdata() {
    fetch("https://reqres.in/api/users?page=2")
        .then((res) => res.json())
        .then((data) => CardList(data.data))
        .catch((err) => console.log(err))
}
Fetchdata()

function CardList(data) {
    const store = data.map((el) => SingleCard(el.id, el.email, el.first_name, el.last_name, el.avatar))
    document.getElementById("container").innerHTML = store.join("")
}

function SingleCard(id, email, first_name, last_name, avatar) {
    let card = `
<div style="border: 2px solid black;">
    <p>Id : ${id}</p>
    <p>Emial : ${email}</p>
    <p>First Name : ${first_name}</p>
    <p>Last Name : ${last_name}</p>
    <img src="${avatar}" alt="">    
</div>
`
    return card;
}