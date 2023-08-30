function getButter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Husband: Got the butter!");
            resolve("butter");
        }, 2000);
    });
}

function getColdDrinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Husband: Got the cold drinks!");
            resolve("cold drinks");
        }, 1500);
    });
}

async function main() {
    try {
        const butter = await getButter();
        console.log("Wife: Let's wait for the husband to get butter...");

        const coldDrinks = await getColdDrinks();
        console.log("Wife: Husband got cold drinks!");

        console.log("Wife: Time to enjoy the snacks!");
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
