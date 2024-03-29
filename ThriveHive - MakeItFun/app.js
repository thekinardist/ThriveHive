// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.
import './main.css'


import {mapLoadingScreenComponent} from './map-loading'
AFRAME.registerComponent('map-loading', mapLoadingScreenComponent)


import {uiComponent} from './user-interface'
AFRAME.registerComponent('ui', uiComponent)


const swapBody = (newHtml) => {
 const scene = document.body.querySelector('a-scene')
 scene.parentElement.removeChild(scene)
 document.body.insertAdjacentHTML('beforeend', newHtml)
}


window.addEventListener('startar', ({detail}) => {
 swapBody(require('./ar.html'))
 window._startAR = detail
})


window.addEventListener('stopar', () => {
 swapBody(require('./map.html'))
})
import {characterMoveComponent, characterRecenterComponent} from './components'
AFRAME.registerComponent('character-move', characterMoveComponent)
AFRAME.registerComponent('character-recenter', characterRecenterComponent)


AFRAME.registerComponent('no-cull', {
 init() {
   this.el.addEventListener('model-loaded', () => {
     this.el.object3D.traverse(obj => obj.frustumCulled = false)
   })
 },
})



