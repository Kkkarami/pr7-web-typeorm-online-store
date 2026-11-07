import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { SlugService } from '../shared/slug/slug.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DishEntity } from './entities/dish.entity';

@Injectable()
export class DishesService {
    constructor(
        @InjectRepository(DishEntity)
        private readonly dishesRepository: Repository<DishEntity>,
    ) {}

    private dishes = [
        {
            id: '1',
            title: 'Піца Маргарита',
            price: 220,
            weightGrams: 450,
            calories: 850,
            isSpicy: false,
        },
        {
            id: '2',
            title: 'Бургер',
            price: 180,
            weightGrams: 300,
            calories: 650,
            isSpicy: false,
        },
    ];

    async findAll() {
        return this.dishesRepository.find();
    }

    async findOne(id: string) {
        const dish = await this.dishesRepository.findOne({ where: { id } });

        if(!dish){
            throw new NotFoundException(`Страва з ID ${id} не знайдена`);
        }

        return dish;
    }

    async create(createDishDto: CreateDishDto) {
        const newDish = this.dishesRepository.create(createDishDto);

        return await this.dishesRepository.save(newDish);
    }

    async update(id: string, updateDishDto: UpdateDishDto) {
        const dish = await this.findOne(id);

        Object.assign(dish, updateDishDto);

        return await this.dishesRepository.save(dish);
    }

    async remove(id: string) {
        await this.findOne(id);

        await this.dishesRepository.delete(id);
    }

}
