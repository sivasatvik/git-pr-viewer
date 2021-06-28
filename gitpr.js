(function() {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    /* Collapse/Expand all the PR page files.
     * Called when the checkbox is changed.
     */
    function checkCollapse(value){
        const selectElements = document.getElementsByClassName("btn-octicon");
        // console.log("selectElements length: " + selectElements.length);
        var j;
        for (j = 0; j < selectElements.length; j++){
            // console.log(selectElements[j].getAttribute('aria-expanded'));
            if(selectElements[j].getAttribute('aria-expanded') == "true"){
                // console.log("Clicking only on expanded files");
                selectElements[j].click();
            }
        }
    }

    /**
     * Listener for the message from popup window of the add on
     */
    browser.runtime.onMessage.addListener((message) => {
        if(message.command == "tabify"){
            // console.log("in tabify");
            checkCollapse(message.value);
        }
    });

})();
