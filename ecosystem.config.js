module.exports = {
    apps: [
      {      name: "student-paddy-website",
        script: "./node_modules/next/dist/bin/next",
        args: "start -p " + (process.env.PORT || 3000),
        watch: false,
        autorestart: true,
      },
    ],
  };