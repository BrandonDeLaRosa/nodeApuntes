const {router}= require('express');

const routes = router();

routes.get(
    '/', logger, requestTime,(req, res, next) => {
   res.send ("hello world");
});
routes.post(
    '/', logger,(req, res, next) => {
   res.send ("Estas haciendo post");
});
routes.delete(
    '/', logger,(req, res, next) => {
   res.send ("Estas haciendo delete ");
});
routes.put(
    '/', logger,(req, res, next) => {
   res.send ("Estas haciendo put");
});

// exportar en node

module.exports = router;