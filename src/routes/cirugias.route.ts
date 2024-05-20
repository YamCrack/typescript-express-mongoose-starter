import { Router } from 'express';
import CirugiaController from '@controllers/cirugia.controller';
import { CreateCirugiaDto } from '@dtos/cirugia.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

export default class CirugiasRoute implements Routes {
    public path = '/api/cirugias';
    public router = Router();
    public cirugiaController = new CirugiaController();
    
    constructor() {
        this.initializeRoutes();
    }
    
    private initializeRoutes() {
        this.router.get(`${this.path}`, this.cirugiaController.getCirugias);
        this.router.get(`${this.path}/:id`, this.cirugiaController.getCirugiaById);
        this.router.post(`${this.path}`, validationMiddleware(CreateCirugiaDto, 'body'), this.cirugiaController.createCirugia);
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateCirugiaDto, 'body', true), this.cirugiaController.updateCirugia);
        this.router.delete(`${this.path}/:id`, this.cirugiaController.deleteCirugia);
    }

}