const callBack = (details) => {
    if (details.url.startsWith("https://docs.oracle.com/javase/7/docs")) {
        return {
            redirectUrl : details.url.replace('7', 8)
        }
    }
}

const filter = {
    urls: []
}

const optionalExtraInfo = ['blocking']

chrome.webRequest.onBeforeRequest.addListener(callBack, filter, optionalExtraInfo)