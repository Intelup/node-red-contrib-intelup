const request = require("request")

module.exports = function(RED) {
  function intelup(config) {
    RED.nodes.createNode(this, config)
    var node = this
    node.on("input", function(msg) {
      var token = config.token || ""
      var data_array = []
      if (
        Array.isArray(msg.payload) &&
        msg.payload.filter(
          elem => elem.hasOwnProperty("name") && elem.hasOwnProperty("value")
        ).length === msg.payload.length
      ) {
        data_array = msg.payload
      } else if (
        msg.payload.hasOwnProperty("name") &&
        msg.payload.hasOwnProperty("value")
      ) {
        data_array = [msg.payload]
      }

      if (data_array.length > 0) {
        var requestJson = {
          token: token,
          data_array: data_array
        }
        request(
          {
            url: "https://api.intelup.app/v1/integration/iot/nodered",
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            json: requestJson,
            body: JSON.stringify(requestJson)
          },
          function(error, response, body) {
            if (error) {
              node.status({ fill: "red", shape: "ring", text: "error" })
              return console.error("upload failed:", error)
            }
            node.status({ fill: "green", shape: "dot", text: "sent" })
            msg.response = body
            node.send(msg)
          }
        )
      } else {
        node.send(msg)
      }

      // msg.payload = msg.payload.toLowerCase();
      // node.send(msg);
    })
  }
  RED.nodes.registerType("intelup", intelup)
}
