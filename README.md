# Contentsquare-lawn_mowers
- The problem is to manage automatic lawn Mowers to mow rectanglar surfaces.
- Read the [Description](./Description.pdf) to know more about the project

## Initial setup
Follow the below steps after opening the repository in the local machine

1. Install npm dependencies with `npm install`
1. Compiles the typescript files by running `npm run build` 
1. Runs the test for the project using `npm run test` 
    - Input for the test were predefined in `files/input.txt`

#### Note: `npm run clean` can be used to clean the build, but it also deletes the output file

### Custom input for the project
1. Custom input can be given by replacing the contents in `files/input.txt`
    - Format for the input was given in [here](./Description.pdf)
1. `files/input.txt` can be changed with custom input file according to [Description](./Description.pdf)
    - Also change the `input.txt` from [index.ts](./index.ts) to continue the process

### Output for the project
Two different ways of output were given after the execution
1. Output is displayed on the console (testing window)
1. Output is stored in `./files/output.txt`

#### Note: each line of output displays the final position and direction of single lawn Mower
check [Description](./Description.pdf) to know more about output format

### Misc
The predefined input file and the ouput file is stored in `./files`

Following were the commands than can be executed in the project
- `npm run build` -> Used to compile typescript files in the project
- `npm run clean` -> Deletes the build and output file
- `npm run test` -> Run the test for the project with input from `./files/input.txt`
- `npm run watch` -> Watch command used during development