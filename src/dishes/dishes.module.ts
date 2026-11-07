import { Module } from '@nestjs/common';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishEntity } from './entities/dish.entity';

@Module({
    imports: [
        SharedModule,
        TypeOrmModule.forFeature([DishEntity]),
    ],
    controllers: [DishesController],
    providers: [DishesService],
    exports: [DishesService],
})
export class DishesModule {}