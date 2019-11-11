import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, RelationId} from "typeorm";
import {IsDefined, Min, Max} from "class-validator";
import { CarDealer } from "./CarDealer";

export enum CarType {
    MODERN = "modern",
    OLD = "old",
    GHOST = "ghost"
}

@Entity()
export class Car extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined()
    name: string;

    @Column()
    model: string;

    @Column()
    @Min(0)
    @Max(15)
    age: number;

    @Column({
        type: "enum",
        enum: CarType,
        default: CarType.GHOST
    })
    carType: CarType;

    @ManyToOne(type => CarDealer, carDealer => carDealer.cars)
    carDealer: CarDealer;

    @RelationId((car: Car) => car.carDealer)
    carDealerId: number;
}
