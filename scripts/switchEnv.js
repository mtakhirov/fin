import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.join(__dirname, '..')
const sourceEnvExample = path.join(projectRoot, '.env.example')
const devFile = path.join(projectRoot, '.env.development')
const prodFile = path.join(projectRoot, '.env.production')

if (!fs.existsSync(sourceEnvExample)) {
  console.log(chalk.red('Error: Source .env.example file does not exist.'))
  process.exit(1)
}

const argv = process.argv.slice(2)

if (argv.includes('--dev')) {
  copyFile(sourceEnvExample, devFile)
} else if (argv.includes('--prod')) {
  copyFile(sourceEnvExample, prodFile)
} else {
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
