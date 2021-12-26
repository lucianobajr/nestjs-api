import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://luciano:luciano@cluster0.h5u87.mongodb.net/nestjs?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
