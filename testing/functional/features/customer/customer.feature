Feature: When retrieving a single customer by ID

Background:
  * url 'http://localhost:4002'

Scenario: Should return a valid customer if the customer ID is valid
  Given text query =
  """
  query Customer($customerId: ID!) {
    customer(id: $customerId) {
      id
      username
      givenName
      surname
      gender
      addresses {
        street
        city
        state
        zip
      }
      phones {
        number
        type
      }
      emails {
        address
        type
      }
    }
  }
  """

  And def variables = {customerId: "1001"}

  And def expected =
  """
{
  data: {
    customer: {
        id: '1001',
        username: 'alice.smith',
        givenName: 'Alice',
        surname: 'Smith',
        gender: 'female',
        addresses: [
          {
            street: '111 Main St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94111',
          },
        ],
        phones: [
          {
            number: '415-555-1001',
            type: 'home',
          },
          {
            number: '213-555-1001',
            type: 'work',
          },
        ],
        emails: [
          {
            address: 'alice.smith@example.com',
            type: 'personal',
          },
          {
            address: 'alice.smith@company.com',
            type: 'work',
          },
        ],
      },
  }
}
  """

  And request { query: '#(query)', variables: '#(variables)' }
  When method post
  Then status 200
  * match response == expected