const {Cc,Ci} = require("chrome");
require('sdk/tabs').on("ready", onLoad);

function onLoad(tabe) {
    var wm = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator);
    var mainWindow = wm.getMostRecentWindow("navigator:browser");

    var cert = get_valid_cert(mainWindow.gBrowser);
    var root_issuer = cert.issuer;
    while (root_issuer && root_issuer.issuer) {
        root_issuer = root_issuer.issuer;
    }

    console.log("");
    console.log("common name:              " + cert.commonName);
    console.log("sha1 fingerprint:         " + cert.sha1Fingerprint);
    console.log("issuer common name:       " + cert.issuerCommonName);
    console.log("root issuer nickname:     " + root_issuer.nickname);
    console.log("root issuer subject name: " + root_issuer.subjectName);
    console.log("");
}

// stolen from perspectives project
function get_valid_cert(gb) {
    var ui = gb.securityUI;
    try {
        ui.QueryInterface(Ci.nsISSLStatusProvider);
        if(!ui.SSLStatus) {
            return null;
        }
        return ui.SSLStatus.serverCert;
    }
    catch (e) {
        Pers_debug.d_print("error", "Perspectives Error: " + e);
        return null;
    }
}

