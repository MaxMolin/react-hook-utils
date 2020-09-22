module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "./usebrowserwindowsize/src/*.js",
    "./usegeoip/src/*.js",
  ],
  coverageDirectory: "tests/coverage",
  coverageReporters: [
    "text",
    "html",
  ],
  coverageThreshold: {
    "global": {
      "lines": 90,
      "statements": 90
    }
  },
  testEnvironment: "jsdom",
  testMatch: [
     "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
   testPathIgnorePatterns: [
     "/node_modules/"
   ],
};
