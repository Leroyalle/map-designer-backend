import { ProjectItem } from 'prisma/__generated__';

export class PublishProjectDto {
  id: string;
  canvasWidth: number;
  canvasHeight: number;
  items: ProjectItem[];
}
