const uiComponent = {
    init() {
      const iconmapclothing = document.getElementById('Clothing_Rotating.glb')
      const iconmapheart = document.getElementById('HeartAnimated.glb')
      const iconmapfood = document.getElementById('Food.glb')
      const iconmapsleep = document.getElementById('Sleep.glb')
   
   
      const iconmapHealthClinic = document.getElementById('tabs')
      //
      const btn1 = document.getElementById('btn1')
      const btn2 = document.getElementById('btn2')
      const btn3 = document.getElementById('btn3')
      const btn4 = document.getElementById('btn4')
      const btn5 = document.getElementById('btn5')
      // update these with the ids of the models
      const clothingtab = document.getElementById('clothing')
      const healthtab = document.getElementById('health')
      const foodtab = document.getElementById('food')
      const sleeptab = document.getElementById('sleep')
   
   
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
        // set visible
        // iconmapclothing.setAttribute('visible', false)
        // iconmapheart.setAttribute('visible', false)
        // iconmapfood.setAttribute('visible', false)
        // iconmapsleep.setAttribute('visible', false)
        window.dispatchEvent(stopAr)
      }
   
   
      // set buttonhandler for tab1
      const handleTabClick1 = () => {
        console.log('tab click1')
        iconmapHealthClinic.style.display = 'flex'
        // set visible
        // clothingtab.setAttribute('visible', true)
        // healthtab.setAttribute('visible', false)
        // sleeptab.setAttribute('visible', false)
        // foodtab.setAttribute('visible', false)
      }
   
   
      const handleTabClick2 = () => {
        console.log('tab click2')
        iconmapHealthClinic.style.display = 'flex'
        // set visible
        // clothingtab.setAttribute('visible', false)
        // iconmapHealthClinic.setAttribute('visible', true)
        // foodtab.setAttribute('visible', false)
        // sleeptab.setAttribute('visible', false)
      }
      const handleTabClick3 = () => {
        console.log('tab click3')
        iconmapHealthClinic.style.display = 'flex'
        // set visible
        // clothingtab.setAttribute('visible', false)
        // healthtab.setAttribute('visible', false)
        // foodtab.setAttribute('visible', true)
        // sleeptab.setAttribute('visible', false)
      }
      const handleTabClick4 = () => {
        console.log('tab click4')
        iconmapHealthClinic.style.display = 'flex'
        // set visible
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
      //
   
   
      //
      clothingtab.addEventListener('click', handleTabClick1)
      healthtab.addEventListener('click', handleTabClick2)
      foodtab.addEventListener('click', handleTabClick3)
      sleeptab.addEventListener('click', handleTabClick4)
   
   
      //
    },
   }
   export {uiComponent}
   
   