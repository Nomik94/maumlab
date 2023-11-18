import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { typeOrmConfig } from '@/config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeyModule } from '@/modules/servey/servey.module';
import { QuestionModule } from '@/modules/question/question.module';
import { ChoiceModule } from '@/modules/choice/choice.module';
import { ResponseDetailModule } from '@/modules/response-detail/response-detail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ServeyModule,
    QuestionModule,
    ChoiceModule,
    ResponseDetailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
