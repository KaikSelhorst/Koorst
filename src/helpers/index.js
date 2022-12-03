import debounce from "./debounce";

export function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, "");
  }
}

export function scrollAnime(data) {
  const elementsArray = [...document.querySelectorAll(data)];
  let positionElements;

  // Pega as informações dos elementos
  // da ElementsArray pegando Element,
  // Distancia até o scroll(offSet) e
  // data='value' = dataClass
  function getElementInformations(element) {
    const regexp = /[\u005B \u005D]/gi;
    const offSet = element.offsetTop - window.innerHeight * 0.8;
    const dataClass = element.getAttribute(data.replace(regexp, ""));
    return {
      element,
      offSet,
      dataClass,
    };
  }
  // Veficica se a distancia de todos
  // os elemento em relação ao scroll
  // do site
  const checkDistance = debounce(() => {
    const lastItem = positionElements[positionElements.length - 1];
    positionElements.forEach((item) => {
      if (window.pageYOffset > item.offSet) {
        item.element.classList.add(item.dataClass);
      }
      if (lastItem.element.classList.contains(lastItem.dataClass)) {
        stop();
      }
    });
  }, 50);

  // Verifica se ElementosArray = todos os elementos com o Data
  // Adicionando evento no Html
  function init() {
    if (elementsArray.length) {
      positionElements = elementsArray.map(getElementInformations);
      checkDistance();
      document.addEventListener("scroll", checkDistance);
    }
  }
  // Remove o evento do
  // html
  function stop() {
    document.removeEventListener("scroll", checkDistance);
  }

  init();
}
