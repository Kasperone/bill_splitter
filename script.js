const amountToPay = document.querySelector("#price")
const numberOfPeople = document.querySelector("#people")
const tip = document.querySelector("#tip")
const countBtn = document.querySelector(".count")
const errorMsg = document.querySelector(".error")
const costInfo = document.querySelector(".cost-info")
const cost = document.querySelector(".cost")

const checkFields = () => {
	if (amountToPay.value == "" || numberOfPeople.value == "" || tip.value == 0) {
		errorMsg.textContent = "Complete all fields!"
	} else {
		errorMsg.textContent = ""
		costInfo.style.display = "none"
		addUp()
	}
}

const addUp = () => {
	const newAmountToPay = parseFloat(amountToPay.value)
	const newnumberOfPeople = parseInt(numberOfPeople.value)
	const newTip = parseFloat(tip.value)
	const sum = (newAmountToPay + newAmountToPay * newTip) / newnumberOfPeople

	costInfo.style.display = "block"
	cost.textContent = sum.toFixed(2)
}

countBtn.addEventListener("click", checkFields)
