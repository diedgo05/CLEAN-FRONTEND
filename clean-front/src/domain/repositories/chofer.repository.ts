import { Observable } from "rxjs";
import { ChoferModel } from "../models/chofer.model";


export abstract class ChoferRepository {

    abstract save(params: {id: number, nombre: string, apellido_p: string, apellido_m: string, edad: number}): Observable<ChoferModel>;

    abstract getAll(): Observable<ChoferModel>;

    abstract update(params: {id: number, nombre: string, apellido_p: string, apellido_m: string, edad: number}): Observable<ChoferModel>;

    abstract delete(id: number): Observable<ChoferModel>;
}