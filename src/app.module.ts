import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { CustomersModule } from './customers/customers.module';
import { StocksModule } from './stocks/stocks.module';
import { InventoriesModule } from './inventories/inventories.module';
import { ProductsModule } from './products/products.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { StripersModule } from './stripers/stripers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PaymentsModule, CustomersModule, StocksModule, InventoriesModule, ProductsModule, SubscriptionsModule, StripersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
