const createSlideElementFromObject = (nbElement) => {
  const elementSize = Math.ceil(100 / nbElement)
  return (element) => {
    const slide = document.createElement('div')
    slide.className = 'element-wrap'
    slide.style.width = `${elementSize}%`
    // slide.href = element.link
    const slide_element = document.createElement('div')
    slide_element.className = 'element'
    const image = document.createElement('img')
    image.src = element.img
    const title = document.createElement('div')
    title.className = 'title'
    const title_text = document.createTextNode(element.title)
    title.appendChild(title_text)
    const ip = document.createElement('div')
    ip.className = 'ip'
    const ip_text = document.createTextNode(element.ip)
    ip.appendChild(ip_text)
    slide.appendChild(slide_element)
    slide_element.appendChild(image)
    slide_element.appendChild(title)
    slide_element.appendChild(ip)

    return slide
  }
}

window.onload = () => {
  const slider = document.querySelector('.slider')
  if (slider) {
    const slideObject = [
      {
        img: 'images/server4.webp',
        title: 'CSS - Serveur only dust2 objectif 16K$',
        ip: '54.36.127.125:27015',
        link: 'css_de_dust2.html',
      },
      {
        img: 'images/server3.webp',
        title: 'CSS - Serveur multimaps fun 16K$',
        ip: '54.36.127.125:27016',
        link: 'css_multimap.html',
      },
      {
        img: 'images/server.webp',
        title: 'CSGO - Serveur antiroxx fun - RTV ',
        ip: '164.132.181.126:27025',
        link: 'csgo_antirox.html',
      },
      {
        img: 'images/server2.webp',
        title: 'CSGO - Serveur multimaps fun 16$k',
        ip: '164.132.181.126:27030',
        link: 'csgo_multimap.html',
      },
      {
        img: 'images/server5.webp',
        title: 'CSS - ANTIROXX débutant/moyen',
        ip: '51.210.203.225:27015',
        link: 'css_antirox.html',
      },
    ]

    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )

    const nbElement = vw >= 1080 ? 4 : 1

    const slideElement = slideObject.map(
      createSlideElementFromObject(nbElement)
    )
    slideElement.forEach((element) => slider.appendChild(element))
    slider.style.transition = `left ${0.15 * nbElement}s`

    let currentPage = 0
    let currentPurcent = 0
    const maxPage = Math.ceil(slideObject.length / nbElement) - 1
    const purcentageLastPage =
      nbElement > 1 ? (slideObject.length % nbElement) * 25 : 100

    const arrowLeft = document.querySelector('.arrow.left')
    const arrowRight = document.querySelector('.arrow.right')

    arrowLeft.addEventListener('click', () => {
      if (currentPage == maxPage) {
        currentPage--
        currentPurcent -= purcentageLastPage
        slider.style.left = `-${currentPurcent}%`
      } else if (currentPage - 1 >= 0) {
        currentPage--
        currentPurcent -= 100
        slider.style.left = `-${currentPurcent}%`
      }
    })

    arrowRight.addEventListener('click', () => {
      if (currentPage == maxPage - 1) {
        currentPage++
        currentPurcent += purcentageLastPage
        slider.style.left = `-${currentPurcent}%`
      } else if (currentPage != maxPage) {
        currentPage++
        currentPurcent += 100
        slider.style.left = `-${currentPurcent}%`
      }
    })
  }
}
