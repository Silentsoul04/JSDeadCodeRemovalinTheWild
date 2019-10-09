
    window.addEventListener("load", function() {
        var url = "https://ocsrest.ebay.com/ocsrsapp/o2/inflow/inflowcomponent?input=%7B%22pageId%22%3A2387624%2C%22surveyTitle%22%3A%22Tell%20us%20what%20you%20think%22%2C%22posTop%22%3A504%7D&callback=Inflow.cb";
        var scriptTag = document.createElement("script");
        scriptTag.src = url;
        document.body.appendChild(scriptTag);
    });
