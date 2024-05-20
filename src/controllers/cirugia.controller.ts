import CirugiasService from "@/services/cirugias.service";
import { NextFunction, Request, Response } from "express";

export default class CirugiaController {

    public cirugiasService = new CirugiasService();

    public getCirugias = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const findAllCirugiasData = await this.cirugiasService.findAllCirugias();
            res.status(200).json({ cirugias: findAllCirugiasData, message: 'findAll' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public getCirugiaById = async (req: Request, res: Response, next: NextFunction ) => {
        const cirugiaId = req.params.id;

        try {
            const findOneCirugiaData = await this.cirugiasService.findCirugiaById(cirugiaId);
            res.status(200).json({ cirugia: findOneCirugiaData, message: 'findOne' });
        } catch (error) {
            next(error);
       }
    }

    public createCirugia = async (req: Request, res: Response, next: NextFunction ) => {
        const cirugiaData = req.body;

        try {
            const createCirugiaData = await this.cirugiasService.createCirugia(cirugiaData);
            res.status(201).json({ cirugia: createCirugiaData, message: 'created' });
        } catch (error) {
            next(error);
        }
    }

    public updateCirugia = async (req: Request, res: Response, next: NextFunction ) => {
        const cirugiaId = req.params.id;
        const cirugiaData = req.body;

        try {
            const updateCirugiaData = await this.cirugiasService.updateCirugia(cirugiaId, cirugiaData);
            res.status(200).json({ cirugia: updateCirugiaData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    }

    public deleteCirugia = async (req: Request, res: Response, next: NextFunction ) => {
        const cirugiaId = req.params.id;

        try {
            const deleteCirugiaData = await this.cirugiasService.deleteCirugia(cirugiaId);
            res.status(200).json({ cirugia: deleteCirugiaData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    }   

}