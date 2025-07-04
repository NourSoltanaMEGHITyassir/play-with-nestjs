import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthController } from './auth/auth.controller';
import { TestService } from './test/test.service';
import { StestController } from './stest/stest.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, AuthController, StestController],
  providers: [AppService, TestService],

})
export class AppModule {}
