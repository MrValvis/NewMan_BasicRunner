//Start - declaration of variables
const newman = require('newman');

// Define the collection file path
const collectionFile = '../xxxxxxxxxxx.postman_collection.json';

// Define an array of folder names to run
const folders = ['Folder1', 'Folder2'];

// Define the number of times to loop
const loopCount = 1;

// Define Newman options
const newmanOptions = {
    collection: require(collectionFile),
    reporters: 'cli',
    folder: folders
};
//End - declaration of variables


// Function to run Newman loop asynchronously
async function runNewmanLoop() {
    for (let i = 0; i < loopCount; i++) {
        console.log(`Running Newman loop ${i + 1}`);
        try {
            await new Promise((resolve, reject) => {
                newman.run(newmanOptions, function (err) {
                    if (err) {
                        console.error('Newman run encountered an error:', err);
                        reject(err);
                    } else {
                        console.log('Newman run completed successfully');
                        resolve();
                    }
                });
            });
        } catch (error) {
            console.error('An error occurred during Newman run:', error);
        }
    }

    // Delay before closing the process 
    setTimeout(() => {
        process.exit(0); // Exit the process with success code
    }, 10000); // 10 seconds delay
}
//Main
runNewmanLoop();