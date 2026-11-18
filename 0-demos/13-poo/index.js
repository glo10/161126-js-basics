import Moto from './classes/moto.js'
import Vehicule from './classes/vehicule.js'

const ds = new Vehicule() // appel le constructeur avec les valeurs par défaut
const pgt206 = new Vehicule('206', 'Peugeot', new Date()) // call constructor nos valeurs
const pgt106 = new Vehicule('106', 'Peugeot', new Date())
const renault5 = new Vehicule('V', 'Renault', new Date())

const yamaha = new Moto('Yahama', 'Yahama', new Date())
ds.demarrer()
ds.arreter()
renault5.nettoyer()
yamaha.garer()