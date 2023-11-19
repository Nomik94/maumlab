export interface IResponseArray {
  choiceId: number;
  questionId: number;
  completedSurveyId: number;
}

export type ResponseItem = Omit<IResponseArray, 'completedSurveyId'>;
