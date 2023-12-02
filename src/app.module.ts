import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { ThoughtModule } from './thought/thought.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thought } from './thought/entities/thought.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          synchronize: true,
          entities: [Thought],
        };
      },
    }),
    ThoughtModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
