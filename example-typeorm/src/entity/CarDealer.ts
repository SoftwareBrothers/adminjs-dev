import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany} from "typeorm";
import {IsDefined, Min, Max} from "class-validator";
import { Car } from "./Car";

@Entity()
export class CarDealer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined()
    name: string;

    @OneToMany(type=> Car, car => car.carDealer)
    cars: Array<Car>
}
