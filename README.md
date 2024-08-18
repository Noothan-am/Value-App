# Trophic

Trophic is a Slack-integrated platform that enhances team collaboration and recognition. This tool allows users to send virtual coins, celebrate milestones, and convert coins into cash bonuses, all within the Slack workspace.

## Features

- **Send Coins**: Reward your peers by sending them virtual coins as a token of appreciation.
- **Mark Milestones**: Track and celebrate key milestones within your team.
- **Convert Coins**: Accumulate and convert coins into cash bonuses at the end of each cycle.

## Installation

To get started with Trophic, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Noothan-am/Value-App.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Value-App
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```
4. Set up your environment variables in a `.env` file:
    ```
    SLACK_API_TOKEN=your_slack_api_token
    DATABASE_URL=your_database_url
    ```
5. Start the application:
    ```bash
    npm start
    ```

## Usage

Once the application is running, you can use the following commands within Slack to interact with Trophic:

- **/sendcoin [user] [amount]**: Send a specific amount of coins to a user.
- **/milestone [name] [date]**: Create and track a milestone.
- **/convertcoins**: Convert your accumulated coins into cash bonuses.

## Contributing

We welcome contributions to improve Trophic! Please fork the repository and submit a pull request. For major changes, please open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the [Slack API](https://api.slack.com/) for providing the integration tools.
- Special thanks to all the contributors who helped in developing this project.

