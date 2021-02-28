describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/Part2-Cypress');
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then( $el => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then( $el => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then( $el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound source changes when select party horn radio', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#horn-sound').then( $el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
    cy.get('#sound-image').then( $el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  it('Volume image changes when increasing volume - level 3', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image').then( $el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume image changes when increasing volume - level 2', () => {
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then( $el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes when increasing volume - level 1', () => {
    cy.get('#volume-number').clear().type('32');
    cy.get('#volume-image').then( $el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes when increasing volume - level 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then( $el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Disable honk when textbox is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then( $el => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Disable honk when textbox is non-number', () => {
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then( $el => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error is shown when you type a number outside range', () => {
    cy.get('#volume-number').clear().type(1000).trigger('input');
    cy.get('#volume-number:invalid').then( $el => {
      expect($el).to.exist;
    })
  })
});
