# node-red-contrib-intelup

This is a node-red module to send data to [Intelup Cloud](https://intelup.app), a SaaS Analytics platform.

# Install

To install the latest version, run the following command in your Node-RED user directory (typically ~/.node-red):

`npm i node-red-contrib-intelup`

# Usage

![node-red-intelup00](https://user-images.githubusercontent.com/25334994/43339754-9adbd1d6-91b0-11e8-83d4-2e19e03ca0b4.png)

The Intelup node accepts a single object or an array of objects with `name` and `value` parameters in `msg.payload`.  

![node-red-intelup01](https://user-images.githubusercontent.com/25334994/43339766-9f3e0b54-91b0-11e8-9929-b97c8519559e.png)  

![node-red-intelup02](https://user-images.githubusercontent.com/25334994/43339770-a22082b6-91b0-11e8-95a0-ac256960a836.png)

The output contains original `msg` object with a `response` parameter with the server's response.  

To use the data in Intelup platform you need to generate a device token and add it's value in node configuration.  

![node-red-intelup03](https://user-images.githubusercontent.com/25334994/43339771-a34c5606-91b0-11e8-96b2-a301d52d4f69.png)

# Sample Flow

```JSON
[{"id":"d8c01eaa.d74708","type":"tab","label":"Flow 1","disabled":false,"info":""},{"id":"b754fb9.1c62108","type":"inject","z":"d8c01eaa.d74708","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":140,"y":100,"wires":[["34508d3b.016ec2"]]},{"id":"66c60d15.ca9e9c","type":"intelup","z":"d8c01eaa.d74708","name":"","token":"","x":490,"y":100,"wires":[["b93486f3.778998"]]},{"id":"34508d3b.016ec2","type":"function","z":"d8c01eaa.d74708","name":"Create Payload","func":"msg.payload = {\n    name: \"HelloNodeRed\",\n    value: 101\n}\nreturn msg;","outputs":1,"noerr":0,"x":320,"y":100,"wires":[["66c60d15.ca9e9c"]]},{"id":"b93486f3.778998","type":"debug","z":"d8c01eaa.d74708","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":630,"y":100,"wires":[]},{"id":"b0b2b58a.e8c83","type":"inject","z":"d8c01eaa.d74708","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":140,"y":220,"wires":[["e0404015.df2be8"]]},{"id":"54bbdab1.70a1bc","type":"intelup","z":"d8c01eaa.d74708","name":"","token":"","x":490,"y":220,"wires":[["32351a39.2c399e"]]},{"id":"e0404015.df2be8","type":"function","z":"d8c01eaa.d74708","name":"Create Payload","func":"msg.payload = [{\n    name: \"HelloNodeRed\",\n    value: 101\n},{\n    name: \"ByeNodeRed\",\n    value: 10\n}]\nreturn msg;","outputs":1,"noerr":0,"x":320,"y":220,"wires":[["54bbdab1.70a1bc"]]},{"id":"32351a39.2c399e","type":"debug","z":"d8c01eaa.d74708","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":630,"y":220,"wires":[]}]
```