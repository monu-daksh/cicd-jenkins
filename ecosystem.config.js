module.exports = {
  apps: [
    {
      name: "nextjs-cicd-jenkins",
      script: "npm",
      args: "start",
      env: {
        PORT: 5000,
        NODE_ENV: "production"
      }
    }
  ]
};
