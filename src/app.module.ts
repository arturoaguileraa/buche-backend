import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { EstablishmentsModule } from './establishments/establishments.module';
import { ProductsModule } from './products/products.module';
import { TablesModule } from './tables/tables.module';
import { AuthModule } from './auth/model/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductCategoriesModule } from './products/product-categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Esto hace que el ConfigModule esté disponible globalmente
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '44668545',
      database: 'db_test',
      autoLoadEntities: true,
      synchronize: true, // Be careful with this in production!
    }),
    ProductCategoriesModule,
    EstablishmentsModule,
    OrdersModule,
    UsersModule,
    ProductsModule,
    TablesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
