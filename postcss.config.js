module.exports = {
    plugins: [
      [
        'postcss-custom-properties',
        {
          preserve: false,
          importFrom: [
            './vars.css',
          ],
        },
      ],
    ],
  };

  console.log('config loaded');
