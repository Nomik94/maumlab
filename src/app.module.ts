import { typeOrmConfig } from '@/config/typeorm.config';
import { ChoiceModule } from '@/modules/choice/choice.module';
import { CompletedSurveyModule } from '@/modules/completed-survey/completed-survey.module';
import { QuestionModule } from '@/modules/question/question.module';
import { ResponseDetailModule } from '@/modules/response-detail/response-detail.module';
import { SurveyModule } from '@/modules/survey/survey.module';
import { formatError } from '@/utils/log/graphql.error';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      formatError: formatError,
    }),
    SurveyModule,
    QuestionModule,
    ChoiceModule,
    ResponseDetailModule,
    CompletedSurveyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
