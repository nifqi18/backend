'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
Route.on('/').render('welcome')

Route.group(() => {
  Route.get('/login', () => ({
    greeting: 'This is the real hello world '
  }));
  Route.post('/login' , 'UserController.tologin');
  Route.post('/register', 'UserController.register');
  Route.post('/postkerja', 'KerjaController.postkerja').middleware('auth:api');
  Route.post('/updatekerja', 'KerjaController.putUpdate').middleware('auth:api');
  Route.get('/currentuser', 'UserController.getToken').middleware('auth:api');
  Route.get('/datalowongan', 'KerjaController.getAll');
  Route.get('/lowongan', 'KerjaController.GetLowkerById');
  Route.post('/createprofile' , 'ProfileController.CreateProfile').middleware('auth:api');
  Route.get('/search' , 'KerjaController.search')
  Route.get('/loadbyprofile' , 'KerjaController.loadbyprofile').middleware('auth:api');
  Route.route('/*/*' , ()=>({
    route : 'not found'
  }))
}).prefix('/api/v1');