import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: string;
  @Column({ name: 'name', type: 'varchar' })
  name: string;
  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;
  @Column({ name: 'price', type: 'decimal' })
  price: number;
  @Column({ name: 'stock', type: 'int' })
  stock: number;
  @Column({ name: 'created_at', type: 'timestamp', nullable: true })
  createdAt: Date;
  @Column({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date;
}
