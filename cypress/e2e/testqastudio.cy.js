describe('Тестирование сайта testqastudio.me', function () {
    
    it('Тетирование корзины с двумя покупками', function () {
        cy.visit('https://test.qa.studio');
        cy.reload();
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();

        cy.get('#menu-top > .menu-item-home > a').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();

        cy.get('#billing_first_name').type('Иван');
        cy.get('#billing_last_name').type('Иванов');
        //cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click().select('Россия');;
        //cy.get('#select2-billing_country-container').click().select('Россия');
        //cy.get('#select2-billing_country-result-bldp-RU').click();
        cy.get('#billing_address_1').type('Жемчужная 6-312');
        cy.get('#billing_city').type('Москва');
        cy.get('#billing_state').type('Московская область');
        cy.get('#billing_postcode').type('123123');
        cy.get('#billing_phone').type('+7999123456789');
        cy.get('#billing_email').type('ivanov@yandex.ru');

        cy.get('#place_order').click();

        cy.contains('Оформение заказа').should('be.visible');

    })

 
})


