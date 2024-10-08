import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { OrderProduct } from './entities/order-product.entity';
import { Product } from 'src/products/entities/product.entity';
import { TablesModule } from 'src/tables/tables.module';
import { UsersModule } from 'src/users/users.module';
import { Session } from 'src/sessions/entities/session.entity';
import { OrdersGateway } from './orders.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Order,OrderProduct, Product, Session]),
  TablesModule, UsersModule
],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersGateway],
})
export class OrdersModule {}
