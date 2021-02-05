import { IsNotEmpty } from "class-validator";

export class GetGithubCommitsQueries {
  @IsNotEmpty()
  user: string;
  
  @IsNotEmpty()
  repository: string;
}
