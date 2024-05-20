import cirugiaModel from "@/models/cirugia.model";
import { CreateCirugiaDto } from "@/dtos/cirugia.dto";

export default class CirugiasService {

    public cirugiaModel = cirugiaModel;

    public async findAllCirugias() {
        const cirugias = await this.cirugiaModel.find();
        return cirugias;
    }

    public async findCirugiaById(cirugiaId: string) {
        const cirugia = await this.cirugiaModel.findById(cirugiaId);
        return cirugia;
    }

    public async createCirugia(cirugiaData: CreateCirugiaDto) {
        const cirugia = await this.cirugiaModel.create(cirugiaData);
        return cirugia;
    }

    public async updateCirugia(cirugiaId: string, cirugiaData: CreateCirugiaDto) {
        const cirugia = await this.cirugiaModel.findByIdAndUpdate(cirugiaId, cirugiaData, { new: true });
        return cirugia;
    }

    public async deleteCirugia(cirugiaId: string) {
        const cirugia = await this.cirugiaModel.findByIdAndDelete(cirugiaId);
        return cirugia;
    }

} 