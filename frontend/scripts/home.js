const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

const animationStep1 = [{
    transform: 'translateX(-25%)'
  },
  {
    transform: 'translateX(0)'
  },
];
const animationStep2 = [{
    transform: 'translateX(0)'
  },
  {
    transform: 'translateX(-26.7%)'
  },
];
const animationStep3 = [{
    transform: 'translateX(-25%)'
  },
  {
    transform: 'translateX(-53.4%)'
  },
];

let stepAtual = 1


const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")
let isAnimating = false

arrowLeft.addEventListener("click", () => {
  handleClickChangeStep(stepAtual - 1)
})
arrowRight.addEventListener("click", () => {
  handleClickChangeStep(stepAtual + 1)
})

const animationOptions = {
  duration: 1000,
  iterations: 1,
  easing: 'ease-in-out',
  fill: "forwards"
};

const hideOrShowArrows = (step) => {
  if (step === 1) {
    arrowLeft.style.display = "none"
  } else {
    arrowLeft.style.display = "block"
  }
  if (step === 3) {
    arrowRight.style.display = "none"
  } else {
    arrowRight.style.display = "block"
  }
}
const handleClickChangeStep = (stepRecebido) => {

  if (isAnimating) return
  hideOrShowArrows(stepRecebido)
  stepAtual = stepRecebido
  if (stepRecebido === 1) {
    animationStep2[0].transform = 'translateX(0%)'

  }
  if (stepRecebido === 3) {
    animationStep2[0].transform = 'translateX(-50%)'
  }
  goToStep(stepRecebido)
  isAnimating = true
  setTimeout(() => {
    isAnimating = false
  }, 1000)
}

const goToStep = (stepRecebido) => {
  const CarrosselImg = document.querySelector("#CarrosselImg")
  const stepsFunctions = {
    1: () => CarrosselImg.animate(animationStep1, animationOptions),
    2: () => CarrosselImg.animate(animationStep2, animationOptions),
    3: () => CarrosselImg.animate(animationStep3, animationOptions),
  }
  const executeChangeStep = stepsFunctions[stepRecebido]
  if (!executeChangeStep) return
  executeChangeStep()
}