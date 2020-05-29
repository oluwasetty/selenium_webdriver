// const { Builder } = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const { By, Key } = webdriver;

const driver = new webdriver.Builder().forBrowser("firefox").build();

async function radioButton() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.css("#title")).sendKeys("This is title that i was talking to you about");
        await driver.findElement(By.css("#description")).sendKeys("This is the description");
        await (await driver.findElement(By.css("div:nth-child(1) > label > span.custom-control-indicator"))).click();
        await driver.findElement(By.css("#submit")).click();
    } catch (error) {
        console.log(error);
    }
}

radioButton();