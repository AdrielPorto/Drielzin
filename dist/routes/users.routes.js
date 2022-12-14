"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRoute = (0, express_1.Router)();
usersRoute.get('/users', (req, res, next) => {
    const users = [{ userName: 'adrielr', Password: 'sexo' }];
    res.status(200).send({ users });
});
usersRoute.get('/users/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});
exports.default = usersRoute;
