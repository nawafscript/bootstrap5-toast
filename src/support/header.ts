import { getHumanTime, toBoolean } from "../helpers"
import Bootstrap5Toast from "../ToastFactory"
import prefrences from "../prefrences"
import { OptionsType } from "../types"

const AvatarComponent = (options: OptionsType) => {
  const avatarElement = document.createElement("img")
  avatarElement.classList.add("rounded", "me-2")
  avatarElement.src = options.avatar || ""
  avatarElement.width = 20
  avatarElement.height = 20

  return avatarElement
}

const CloseButtonComponent = (onCloseEvent: () => void) => {
  const closeBtnElement = document.createElement("button")
  closeBtnElement.classList.add("btn-close")
  closeBtnElement.setAttribute("type", "button")
  closeBtnElement.setAttribute("area-label", "Close")

  closeBtnElement.addEventListener("click", (evt) => {
    evt.stopPropagation()
    onCloseEvent()
  })

  return closeBtnElement
}

export const HeaderComponent = (context: Bootstrap5Toast): Element => {
  const { options } = context
  const headerElement = document.createElement("div")
  headerElement.classList.add("toast-header")

  // Avatar element
  if (options.avatar) {
    headerElement.appendChild(AvatarComponent(options))
  }

  if (options.type) {
    headerElement.classList.add(...prefrences.types[options.type])
  }


  // Create title element.
  const titleElement = document.createElement("strong")
  titleElement.classList.add("me-auto")
  titleElement.innerText = options.title
  headerElement.appendChild(titleElement)

  if (options.datetime) {
    // time
    const timeElement = document.createElement("small")
    timeElement.innerText = getHumanTime(options.datetime)

    headerElement.appendChild(timeElement)
  }

  // Close button
  console.log(options.dismissible)
  if (toBoolean(options.dismissible)) {
    headerElement.appendChild(CloseButtonComponent(context.CloseEvent))
  }

  // Return header element.
  return headerElement
}
