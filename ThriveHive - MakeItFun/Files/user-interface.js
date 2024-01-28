const uiComponent = {
  init() {
    const iconmapclothing = document.getElementById('clothingmap')
    const iconmapheart = document.getElementById('heartmap')
    const iconmapfood = document.getElementById('foodmap')
    const iconmapsleep = document.getElementById('sleepmap')
 
 
    const tabslayer = document.getElementById('tabs')
    //
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    const btn4 = document.getElementById('btn4')
    const btn5 = document.getElementById('btn5')
    const recenterBtn = document.getElementById('recenterBtn')
    // update these with the ids of the models
    const clothingtab = document.getElementById('clothingtab')
    const healthtab = document.getElementById('healthtab')
    const foodtab = document.getElementById('foodtab')
    const sleeptab = document.getElementById('sleeptab')
 
 
    // clothingtab.hidden = true
 
 
    console.log('init')
    const handleClick1 = () => {
      console.log('click1')
      // set visible
      iconmapclothing.setAttribute('visible', true)
      iconmapheart.setAttribute('visible', false)
      iconmapfood.setAttribute('visible', false)
      iconmapsleep.setAttribute('visible', false)
    }
    //
    // console.log('init')
    const handleClick2 = () => {
      console.log('click2')
      // set visible
      iconmapclothing.setAttribute('visible', false)
      iconmapheart.setAttribute('visible', true)
      iconmapfood.setAttribute('visible', false)
      iconmapsleep.setAttribute('visible', false)
    }
    //
    // console.log('init')
    const handleClick3 = () => {
      console.log('click3')
      // set visible
      iconmapclothing.setAttribute('visible', false)
      iconmapheart.setAttribute('visible', false)
      iconmapfood.setAttribute('visible', true)
      iconmapsleep.setAttribute('visible', false)
    }
    //
    // console.log('init')
    const handleClick4 = () => {
      console.log('click4')
      // set visible
      iconmapclothing.setAttribute('visible', false)
      iconmapheart.setAttribute('visible', false)
      iconmapfood.setAttribute('visible', false)
      iconmapsleep.setAttribute('visible', true)
    }
 
 
    // console.log('init')
    const startAr = new CustomEvent('startar')
    const handleClick5 = () => {
      console.log('click5')
      tabslayer.style.display = 'none'
      // set visible
      // iconmapclothing.setAttribute('visible', false)
      // iconmapheart.setAttribute('visible', false)
      // iconmapfood.setAttribute('visible', false)
      // iconmapsleep.setAttribute('visible', false)
      window.dispatchEvent(startAr)
    }
 
 
    const stopAr = new CustomEvent('stopar')
    const handleClick6 = () => {
      console.log('click6')
      //   // set visible
      //   // iconmapclothing.setAttribute('visible', false)
      //   // iconmapheart.setAttribute('visible', false)
      //   // iconmapfood.setAttribute('visible', false)
      //   // iconmapsleep.setAttribute('visible', false)
      window.dispatchEvent(stopAr)
    }
 
 
    // set buttonhandler for tab1
    const handleTabClick1 = () => {
      console.log('tab click1')
      tabslayer.style.display = 'flex'
      // set visible
      clothingtab.style.display = 'block'
      healthtab.style.display = 'none'
      sleeptab.style.display = 'none'
      foodtab.style.display = 'none'
      // clothingtab.setAttribute('visible', true)
      // healthtab.setAttribute('visible', false)
      // sleeptab.setAttribute('visible', false)
      // foodtab.setAttribute('visible', false)
    }
 
 
    const handleTabClick2 = () => {
      console.log('tab click2')
      tabslayer.style.display = 'flex'
      // set visible
      clothingtab.style.display = 'block'
      healthtab.style.display = 'none'
      sleeptab.style.display = 'none'
      foodtab.style.display = 'none'
      // clothingtab.setAttribute('visible', false)
      // healthtab.setAttribute('visible', true)
      // foodtab.setAttribute('visible', false)
      // sleeptab.setAttribute('visible', false)
    }
    const handleTabClick3 = () => {
      console.log('tab click3')
      tabslayer.style.display = 'flex'
      // set visible
      clothingtab.style.display = 'block'
      healthtab.style.display = 'none'
      sleeptab.style.display = 'none'
      foodtab.style.display = 'none'
      // clothingtab.setAttribute('visible', false)
      // healthtab.setAttribute('visible', false)
      // foodtab.setAttribute('visible', true)
      // sleeptab.setAttribute('visible', false)
    }
    const handleTabClick4 = () => {
      console.log('tab click4')
      tabslayer.style.display = 'flex'
      // set visible
      clothingtab.style.display = 'block'
      healthtab.style.display = 'none'
      sleeptab.style.display = 'none'
      foodtab.style.display = 'none'
      // clothingtab.setAttribute('visible', false)
      // healthtab.setAttribute('visible', false)
      // foodtab.setAttribute('visible', false)
      // sleeptab.setAttribute('visible', true)
    }
 
 
    //
    btn1.addEventListener('click', handleClick1)
    btn2.addEventListener('click', handleClick2)
    btn3.addEventListener('click', handleClick3)
    btn4.addEventListener('click', handleClick4)
    btn5.addEventListener('click', handleClick5)
    recenterBtn.addEventListener('click', handleClick6)
    //
 
 
    //
    iconmapclothing.addEventListener('click', handleTabClick1)
    iconmapheart.addEventListener('click', handleTabClick2)
    iconmapfood.addEventListener('click', handleTabClick3)
    iconmapsleep.addEventListener('click', handleTabClick4)
 
 
    //
  },
 }
 export {uiComponent}
 
 
 
 