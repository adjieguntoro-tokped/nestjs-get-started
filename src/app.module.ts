import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';


const MONGO_HOST = 'mongodb+srv://productsDB:productsDB1234@cluster0.slf2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(MONGO_HOST), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
