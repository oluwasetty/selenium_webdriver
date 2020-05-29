const webdriver = require('selenium-webdriver');
const { By, Key } = webdriver;

const driver = new webdriver.Builder().forBrowser("firefox").build();

async function datepickerForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("April 16, 2019");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("April 7, 2019 - April 16, 2019");
        await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error);
    }
}

datepickerForm();