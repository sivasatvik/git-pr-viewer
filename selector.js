/**
 * Function for listening the change in the selected value
 * from the dropdownbox.
 */
function listenForChange(){
    var dropdownSelect = document.querySelector('.switch');
    dropdownSelect.addEventListener('change', (event) => {

        function tabify(tabs){
            console.log("Checked: " + event.target.checked)
            let val = event.target.checked;
            browser.tabs.sendMessage(tabs[0].id, {
                command: "tabify",
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
