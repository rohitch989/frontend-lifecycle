module.exports = {
  ...require("@repo/jest-config/react"),
  testMatch: ["<rootDir>/src/test/**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/test/_mocks_/styleMock.js",
  },
};