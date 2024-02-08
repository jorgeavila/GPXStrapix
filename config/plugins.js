module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dedwszwin'),
        api_key: env('533744984981649'),
        api_secret: env('wDD__s4darLBOxPlMKqvIXlv_ik'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});