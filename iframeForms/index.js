const webdriver = require('selenium-webdriver');
const { By, Key } = webdriver;

const driver = new webdriver.Builder().forBrowser("firefox").build();

async function iframeForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        (await driver).switchTo().frame(0);
        await driver.findElement(By.xpath("//input[@aria-label='Name']")).sendKeys("Taiwo");
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.SPACE).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "08")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "08")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "1991")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "Secret Answer")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        // await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error);
    }
}

iframeForm();