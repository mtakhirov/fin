import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Define paths for the environment files
const projectRoot = path.join(__dirname, '..')
const sourceEnvExample = path.join(projectRoot, '.env.example')
const devFile = path.join(projectRoot, '.env.development')
const prodFile = path.join(projectRoot, '.env.production')

// Check if the source file exists
if (!fs.existsSync(sourceEnvExample)) {
  console.log(chalk.red('Error: Source .env.example file does not exist.'))
  process.exit(1)
}

// Determine which argument is passed: --dev or --prod
const argv = process.argv.slice(2)

if (argv.includes('--dev')) {
  copyFile(sourceEnvExample, devFile) // Copy to .env.development for --dev
} else if (argv.includes('--prod')) {
  copyFile(sourceEnvExample, prodFile) // Copy to .env.production for --prod
} else {
  console.log(
    chalk.red('Error: No valid argument provided. Please use --dev or --prod.'),
  )
  process.exit(1)
}

function copyFile(source, destination) {
  fs.copyFile(source, destination, error => {
    if (error) {
      console.log(chalk.red('Error occurred when the file was copied:', error))
    } else {
      console.log(
        chalk.green(`The ${destination} file was successfully created!`),
      )
    }
  })
}
