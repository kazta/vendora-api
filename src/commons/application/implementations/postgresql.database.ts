import { DataSource } from 'typeorm';
import { DATA_SOURCE_PROVIDER } from '../utils/constans';
import { Product } from 'src/modules/product/domain/entities/product.entities';

export const databaseProviders = [
  {
    provide: DATA_SOURCE_PROVIDER,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'monorail.proxy.rlwy.net',
        port: 27887,
        username: 'postgres',
        password: 'QMNEomZUesptuGAeyKwKhrymGgrZbzIC',
        database: 'postgres',
        entities: [Product],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
