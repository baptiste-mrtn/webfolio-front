import { BaseEntity } from './base-entity';
import { Category } from './category';

export interface Gallery extends BaseEntity {
  title: string;
  description: string;
  picture: string;
  categories: Category[];
}
