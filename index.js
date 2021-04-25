let form = document.getElementById("transaction-form")
form.onsubmit = (e) => {
    console.log(e.target["transaction-type"].value)
    console.log(e.target.amount.value)

    e.preventDefault()
}
