NODE JS

Background:
You are tasked with building a backend service for a fintech application that manages user
transactions. Users should be able to perform various operations such as adding new
transactions, retrieving transaction history, and calculating account balances.

Task:
Create a Node.js application with Express.js that provides the following RESTful API endpoints:
1. POST /transactions: Allows users to add a new transaction with the following details:
● Amount (numeric value)
● Description (string)
● Type (either 'income' or 'expense')
● Date (timestamp)
● User ID (string)

2. GET /transactions/:userId: Retrieves transaction history for a specific user identified by
userId. The response should include an array of transactions sorted by date, with the
most recent transactions appearing first.

3. GET /balance/:userId: Calculates and returns the current account balance for the user
identified by userId. The balance should be calculated by summing up all income
transactions and subtracting the sum of expense transactions.
Requirements:
● Implement input validation for the POST /transactions endpoint to ensure that the
required fields are provided and have the correct data types.
● Use appropriate error handling mechanisms to handle invalid requests, server errors, or
any other potential issues.
● Store transaction data in memory or use a simple database solution (like Postgres) for
demonstration purposes.
● Write unit tests to verify the functionality of the endpoints, including edge cases and error
scenarios.
● Document your API endpoints, including expected request and response formats.
● Additional Information:
● You may use any additional libraries or tools as necessary.
● Consider security implications, such as validating user authentication and authorization.
● Ensure the code is well-organized, readable, and follows best practices.

● Feel free to add any extra features or enhancements that you think would improve the
functionality or usability of the service.

Submission:
Please submit your solution as a GitHub repository and invite Stashngr or a ZIP file containing
the code. Include any necessary instructions for running the application or running the tests.
