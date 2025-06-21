import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
    dir: './',
});

const config: Config = {
    testEnvironment: "jsdom",
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    setupFilesAfterEnv: ["./jest.setup.ts"]
};
 
export default createJestConfig(config);
