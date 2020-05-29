const webdriver = require('selenium-webdriver');
const { By, Key } = webdriver;

const driver = new webdriver.Builder().forBrowser("firefox").build();

async function fileuploadForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname + "\\drf.png");
        await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error);
    }
}

fileuploadForm();