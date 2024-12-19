const buttonElement = document.querySelector("form button")
const ulElement = document.querySelector("ul")
const inputElement = document.querySelector("input")

const listNames = Array.from(ulElement.children).map((li) => li.textContent)

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value.toLowerCase()
  Array.from(ulElement.children).forEach((li, i) => {
    const name = listNames[i]
    if (inputValue) {
      const contentValue = new RegExp(`(${inputValue})`, "gi")
      li.innerHTML = name.replace(contentValue, `<b>$1<b/>`)
      console.log(name)
    }
  })
})
