# Flow Distribution Algorithm

## Overview
This project implements a flow distribution algorithm in Node.js for connecting users with astrologers. The goal is to ensure that each astrologer gets an equal proportion of chances to connect with users, while also providing flexibility to adjust flow for top astrologers.

## Requirements
- Node.js
- Express.js
- Jest (for testing)

## Directory Structure
    ```bash
 .flow-distribution
│ app.js
│ package.json
│ README.md
├───models
│ astrologer.js
│ user.js
├───routes
│ astrologers.js
├───services
│ flowDistribution.js
└───tests
   flowDistribution.test.js
   ```



## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/gajanan0210/Flow-Distribution-Algorithm.git
    cd flow-distribution
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. Use the following endpoints:

    - **Distribute Users:**
      - Method: `POST`
      - URL: `http://localhost:3000/astrologers/distribute`
      - Body: No body needed.

    - **Adjust Flow for Top Astrologers:**
      - Method: `POST`
      - URL: `http://localhost:3000/astrologers/adjustFlow`
      - Body: Select `raw` and `JSON` format, then enter:
        ```json
        {
          "isTopAstrologer": true,
          "flowAdjustment": 1
        }
        ```

### Using Postman

1. **Distribute Users:**
    - Create a new request in Postman.
    - Select `POST` method.
    - Enter URL: `http://localhost:3000/astrologers/distribute`.
    - Click "Send".

2. **Adjust Flow for Top Astrologers:**
    - Create a new request in Postman.
    - Select `POST` method.
    - Enter URL: `http://localhost:3000/astrologers/adjustFlow`.
    - Click on the "Body" tab.
    - Select `raw` and `JSON` format.
    - Enter the following JSON data:
      ```json
      {
        "isTopAstrologer": true,
        "flowAdjustment": 1
      }
      ```
    - Click "Send".

### Using curl

1. **Distribute Users:**
    ```bash
    curl -X POST http://localhost:3000/astrologers/distribute
    ```

2. **Adjust Flow for Top Astrologers:**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"isTopAstrologer": true, "flowAdjustment": 1}' http://localhost:3000/astrologers/adjustFlow
    ```

## Testing

Run the tests using Jest:
```bash
npm test


## Design Principles
- The flow distribution algorithm ensures fairness by distributing users evenly among astrologers. It also allows for flow adjustment for top astrologers based on specific requirements.


## API Endpoints
- POST /astrologers/distribute: Distributes users among astrologers.

- POST /astrologers/adjustFlow: Adjusts the flow for top astrologers.

