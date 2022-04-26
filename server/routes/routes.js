const UserController = require('../controllers/user.controller');
const authenticate = require('../config/authenticate');
const PirataController = require('../controllers/pirata.controller')

module.exports = function(app){

    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);  
    //Para acceder a estas rutas hay que estar autenticado.
    app.get("/api/users", authenticate, UserController.getAll);
    app.get('/api/user/:id', authenticate, UserController.getUser);  

    //Rutas Piratas
    app.post("/api/piratas/new",PirataController.createNewPirata);
    app.get("/api/piratas",PirataController.findAllPiratas);
    app.get("/api/piratas/:id",PirataController.findOnePirata);
    app.post("/api/piratas/changeskill/:skill/:id",PirataController.changeSkill);
    app.delete("/api/piratas/delete/:id",PirataController.deletePirata);
} 