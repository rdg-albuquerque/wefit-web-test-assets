const handleMenuStyle = () => {
  const menuBtnGroup = document.querySelector(".btn-group-vertical")
  const menuBtns = menuBtnGroup.querySelectorAll(".btn")

  if (menuBtnGroup) {
    menuBtnGroup.style.flexDirection = "row"
    menuBtnGroup.style.gap = "5px"
  }

  if (menuBtns.length) {
    menuBtns.forEach((btn) => {
      btn.style.textWrap = "nowrap"
      btn.style.marginTop = 0
      btn.style.borderRadius = "0.25rem"
    })
  }
}

const handleHeaderStyle = () => {
  const headerContainer = document.querySelector(".container .jumbotron")
  const headerCta = document.querySelector(".container .jumbotron .btn")
  const divider = document.querySelector(".container .jumbotron hr")

  if (headerContainer) {
    headerContainer.style.backgroundColor = "#6B757E"
    headerContainer.style.color = "#FFF"
    headerContainer.style.textAlign = "right"
  }

  if (headerCta) {
    headerCta.style.backgroundColor = "#27A844"
    headerCta.style.borderColor = "#27A844"
  }

  if (divider) {
    divider.style.borderTopColor = "#FFFFF33"
  }
}

const handleCardsStyle = () => {
  const cardsContainer =
    document.querySelector(".card").parentElement.parentElement

  if (cardsContainer) {
    cardsContainer.style.flexDirection = "row-reverse"
    const animalsCard = cardsContainer.children[1]
    animalsCard.querySelector(".btn").style.backgroundColor = "#27A844"
    animalsCard.querySelector(".btn").style.borderColor = "#27A844"
    cardsContainer.removeChild(animalsCard)
    cardsContainer.children[3].insertAdjacentElement("beforebegin", animalsCard)
  }
}

const handleListStyle = () => {
  const list = document.querySelector(".container .list-group")
  if (list) {
    list.firstElementChild.classList.remove("active")

    const fourthItem = addListItem("Quarto item", true)
    const fifthItem = addListItem("Quinto item")

    list.appendChild(fourthItem)
    list.appendChild(fifthItem)
  }
}

const addListItem = (textContent, active = false) => {
  if (!textContent || typeof textContent !== "string") {
    return console.error(
      "Parameter 'textContent' is required and must be a string."
    )
  }
  if (typeof active !== "boolean") {
    return console.error("Parameter 'active' must be a boolean.")
  }

  const item = document.createElement("li")
  item.classList.add("list-group-item")
  if (active) {
    item.classList.add("active")
  }
  item.textContent = textContent

  return item
}

handleMenuStyle()
handleHeaderStyle()
handleCardsStyle()
handleListStyle()
