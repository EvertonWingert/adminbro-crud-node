import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import AdminBroMongoose from '@admin-bro/mongoose';
import mongoClient from '../database/index.js';

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  resources: [
    {
      resource: mongoClient,
      options: {
        properties: {
          title: {
            isVisible: {
              list: true,
              edit: true,
              filter: true,
              show: true,
            },
          },
          description: {
            type: 'richtext',
            isVisible: {
              list: true,
              edit: true,
              filter: true,
              show: true,
            },
          },
          completed: {
            isVisible: {
              list: true,
              edit: true,
              filter: true,
              show: true,
            },
          },
          createdAt: {
            isVisible: {
              list: false,
              edit: false,
              filter: false,
              show: false,
            },
          },
          updatedAt: {
            isVisible: {
              list: false,
              edit: false,
              filter: false,
              show: false,
            },
          },
        },
      },

      locale: {
        translations: {
          labels: {
            Project: 'Meus projetos',
          },
        },
      },
    },
  ],
  rootPath: '/admin',
});

const router = AdminBroExpress.buildRouter(adminBro);

export { adminBro, router };
