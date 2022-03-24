const PROXY_CONFIG = {
    "/": {
        "target": "http://localhost:8080",
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