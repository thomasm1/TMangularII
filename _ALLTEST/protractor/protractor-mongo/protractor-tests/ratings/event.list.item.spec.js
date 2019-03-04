describe('Event list details', function ()  {
   describe('When clicking ...', function () {
        it('should navigate to details', function() {
            browser.get('http://localhost:3000/#!/EventRatings');
            var firstElement = element.all(by.binding('name')).first();
            var name;
            firstElement.getText().then(function(test){
                name = text;
            });
            firstElement.click();
            browser.waitForAngular();
            
            var header = element(by.binding('name'));
            expect(header.getText()).toMatch('Jazz On The Green');
        });
   });
});