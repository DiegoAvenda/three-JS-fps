import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

camera.position.z = 5

const loader = new GLTFLoader()

loader.load(
  "./soldier.glb",
  function (gltf) {
    scene.add(gltf.scene)
  },
  undefined,
  function (error) {
    console.error(error)
  }
)

const color = 0xffffff
const intensity = 1
const light = new THREE.AmbientLight(color, intensity)
scene.add(light)

function animate() {
  renderer.render(scene, camera)
}
