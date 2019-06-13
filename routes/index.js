// Import our Controllers
const carController = require('../controllers/carController')

const routes = [
  {
    method: 'GET',
    url: '/api/v1/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/v1/cars/:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/v1/cars',
    handler: carController.addCar,
    // schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/v1/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/v1/cars/:id',
    handler: carController.deleteCar
  }
]

module.exports = routes