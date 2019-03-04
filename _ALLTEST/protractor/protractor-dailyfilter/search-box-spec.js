describe ("Search input box", function () {
  
    it {"should search data.name and data.category using string input characters", function () {
        browser.get("http://daily-filter.s3-website-us-east-1.amazonaws.com/home");
        element(by.model("data.name")).sendKeys("recent");
        element(by.binding("data.name")).getText().then(function(text) {
            console.log(text);
        });
        element(by.buttonText("READ")).click();
        element(by.model("data.category")).$('[value="1"]').click();
        element(by.partialButtonText("READ HERE")).click();
     
     });
     
});
