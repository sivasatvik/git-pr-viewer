/**
 * Function for listening the change in the selected value
 * from the dropdownbox.
 */
function listenForChange(){
    var collapseSelect = document.querySelector('.collapse');
    collapseSelect.addEventListener('click', (event) => {

        function tabify(tabs){
            console.log("Clicked collapse");
            let val = 1;
            browser.tabs.sendMessage(tabs[0].id, {
                command: "tabify-collapse",
                value: val
            });
        }

        browser.tabs.query({active: true, currentWindow: true})
        .then(tabify);

    });

    var expandSelect = document.querySelector('.expand');
    expandSelect.addEventListener('click', (event) => {

        function tabify(tabs){
            console.log("Clicked expand");
            let val = 1;
            browser.tabs.sendMessage(tabs[0].id, {
                command: "tabify-expand",
                value: val
            });
        }

        browser.tabs.query({active: true, currentWindow: true})
        .then(tabify);

    });
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 */
browser.tabs.executeScript({file: "gitpr.js"})
.then(listenForChange)
