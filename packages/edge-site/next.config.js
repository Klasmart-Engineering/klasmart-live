module.exports = {
    async rewrites() {
      return [
        {
          source: '/h5p/play/:activityId',
          destination: 'https://live.kidsloop.dev/h5p/play/:activityId',
        },
      ];
    },
  };