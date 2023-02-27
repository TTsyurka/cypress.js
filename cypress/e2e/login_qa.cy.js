describe('Тестирование login.qa.studio/', function () {
    it('1.1 Проверка авторизации с верными логином и паролем', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();

         cy.contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         
     })

     it('1.2 Проверка проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.reload();

        cy.get('#forgotEmailButton').click();

        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#mailForgot').type('eldee@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
    })

    it('1.3 Проверка авторизации с верными логином и неправильным паролем', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio42');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
    })

    it('1.4 Проверка авторизации с неправильным логином и правильным паролем', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('stepan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
    })

    it('1.5 Проверка проверка валидации: логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('stepandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
    })

    it('1.6 Проверка на привидение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GERMAN@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
    })
 })
 