module.exports = {
  client: {
    includes: ["./src/graphql/**/**"],
    service: {
      name: "Practice-Portal",
      url: "https://rx-api-dev.bluerabbit.vet/",
      skipSSLValidation: true,
    },
  },
};
