import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthController } from './auth/auth.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, AuthController],
  providers: [AppService, UserService],
})
export class AppModule {}
