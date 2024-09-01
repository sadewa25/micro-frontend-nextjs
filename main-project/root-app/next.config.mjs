// next.config.mjs
import NextFederationPlugin from '@module-federation/nextjs-mf';

export default {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          childAuthServices: `childAuthServices@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`, // for auth services
          childProjectServices: `childProjectServices@http://localhost:3002/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`, // for project services
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // host can also expose components 
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
          // files or dependencies we want to share
        },
      }),
    );

    return config;
  },
};