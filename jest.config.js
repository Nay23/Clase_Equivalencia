export default {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    testEnvironment: "jest-environment-jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)",
    ],
  };
  