
export interface Blog{
  id?: string;
  title: string;
  content: string;
  comments?: number;
  likes?: number;
  shares?: number;
  files?: string;
  createAt: Date;
  status: string;
  authorId: string;
}
