module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'office@sedmi-kontinent.rs',
        defaultReplyTo: 'office@sedmi-kontinent.rs',
      },
    },
  },
});