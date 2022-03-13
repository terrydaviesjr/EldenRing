const PROXY_CONFIG = {
    "/": {
        "target": "https://peppy-cosmos-343922.ue.r.appspot.com",
        //"target": "http://localhost:8080",
        "secure": false,
        "changeOrigin": true,
        "bypass": function (req, res, proxyOptions) {
            if (req.headers.accept.indexOf("html") !== -1) {
                return "/index.html";
            }
            req.headers["X-Custom-Header"] = "yes";
        }
    }
};

module.exports = PROXY_CONFIG;