import fs from "fs";
import path from "path";
import merge from "lodash.merge";

// Function to find the project's root directory
const findProjectRoot = (): string => {
  let currentDir = process.cwd(); // Start from where the app is run
  while (!fs.existsSync(path.join(currentDir, "package.json"))) {
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) break; // Stop at the root
    currentDir = parentDir;
  }
  return currentDir;
};

const projectRoot = findProjectRoot();
const configDir = path.join(projectRoot, "config");

// Determine the environment (default to "development")
const ENV: string = process.env.NODE_ENV || "development";

// Function to safely load JSON files
const loadConfig = (filePath: string) => {
  try {
    return fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : {};
  } catch (error) {
    console.error(`Error loading config file: ${filePath}`, error);
    return {};
  }
};

// Load default configuration
const defaultConfigPath = path.join(configDir, "default.json");
const defaultConfig = loadConfig(defaultConfigPath);

// Load environment-specific configuration (if exists)
const envConfigPath = path.join(configDir, `${ENV}.json`);
const envConfig = loadConfig(envConfigPath);

// Merge configs (only overwrite matching keys from envConfig)
const finalConfig = merge({}, defaultConfig, envConfig);
type Config = typeof finalConfig;

const config: Config = finalConfig as Config;

// Export the merged config
export default config;
