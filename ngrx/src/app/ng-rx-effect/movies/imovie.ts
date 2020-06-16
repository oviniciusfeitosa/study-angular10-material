export interface IMovie {
  score: number;
  show: {
    name: string;
    id: number;
    releaseDate: any;
    url: string;
    type: string;
    language: string;
  };
}
