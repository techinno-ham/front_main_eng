describe('Login Flow', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('/auth/login');
  });

  it('should display validation errors when required fields are empty', () => {
    // Attempt to submit the form without entering any data
    cy.get('button[type="submit"]').click();

    // Check that validation messages are displayed
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    // Fill in the email and password fields
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123!');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check that the user is redirected to the dashboard
    cy.url().should('include', '/mybots');

    // Check that a success message is displayed
    cy.contains('Your login was successful.').should('be.visible');
  });

  it('should display an error message on failed login', () => {
    // Fill in incorrect email and password
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('WrongPassword123');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check for the appropriate error message
    cy.contains('Your password is incorrect').should('be.visible');
  });

  it('should toggle password visibility', () => {
    // Check that the password is hidden by default
    cy.get('input[name="password"]').should('have.attr', 'type', 'password');

    // Click the eye icon to show the password
    cy.get('button[aria-label="toggle password visibility"]').click();

    // Check that the password is now visible
    cy.get('input[name="password"]').should('have.attr', 'type', 'text');
  });

  it('should allow login with Google', () => {
    // Stub the Google login request to simulate a successful response
    cy.intercept('GET', `${Cypress.env('NEXT_PUBLIC_BASE_API')}/auth/google`, {
      statusCode: 200,
      body: { success: true },
    }).as('googleLogin');

    // Click the Google login button
    cy.get('button[aria-label="Login with Google"]').click();

    // Wait for the Google login request to complete
    cy.wait('@googleLogin');

    // Verify that the user is redirected to the dashboard
    cy.url().should('include', '/mybots');
  });
});
