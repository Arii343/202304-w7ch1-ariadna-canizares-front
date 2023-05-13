# Robots App

## Data layer

### Data

- Collection of Robots
  - Robot:
    - \_id: string;
    - name: string;
    - imageUrl: string;
    - speed: number;
    - resistence: number;
    - dateOfCreation: string;

### Modification

- loadRobots()
- addRobot()
- removeRobot()
- updateRobot()

## Components

### Store

#### State

- Collection of Robots

#### RobotsReducer

- loadRobots()
- addRobot()
- removeRobot()
- updateRobot()

### App

- Receives useAppDispatch
- Receives an external collection of Robots
- Receives the collection of Robots from store
- Shows the title of the page in a h1 heading
- Renders a RobotsList component

### Header

- Renders navegation bar
- Renders robot logo

### RobotForm

- State
  - Robot
- handleFormSubmit()
- receives a dispatch
- receives an optional Robot to update
- Shows a text input for the name of the Robot
- Shows a text input for the image url
- Shows a number input for the speed of the Robot, max 10
- Shows a number input for the resistence of the Robot, max 10
- Shows a date picker for the robot's date of creation

### RobotsList

- Receives a collection of Robots
- Renders each robot in a RobotCard

### RobotCard

- Receives a Robot with:
  - id
  - name
  - imageUrl
  - speed
  - resistence
  - dateOfCreation
- Shows a h3 for the name of the Robot
- Shows a img for the imageUrl of the Robot
- Show a span for the speed of the Robot
- Show a span for the resistence of the Robot
- Show a span for the dateOfCreation of the Robot
