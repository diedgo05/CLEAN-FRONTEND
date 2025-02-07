import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { ChoferModel } from "../models/chofer.model";
import { ChoferRepository } from "../repositories/chofer.repository";


export class saveChoferUseCase implements UseCase <{id: number, nombre: string, apellido_p: string, apellido_m: string, edad: number}, ChoferModel> {

    constructor (private cRepo: ChoferRepository) {}

    execute(params: { id: number; nombre: string; apellido_p: string; apellido_m: string; edad: number; }): Observable<ChoferModel> {
        return this.cRepo.save(params);
    }
}