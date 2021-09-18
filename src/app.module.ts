import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './config/configuration.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DatabaseModule, ConfigurationModule, ProductModule],
})
export class AppModule {}
