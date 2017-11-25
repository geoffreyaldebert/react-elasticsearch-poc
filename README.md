# react-elasticsearch-poc

[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

> ReactJS + Elasticsearch Proof of Concept - for use with Malice UI

--------------------------------------------------------------------------------

## Getting Started

Start Elasticsearch

```bash
$ docker run -d \
             --name elastic \
             -p 9200:9200 \
             -e http.cors.enabled=true \
             -e http.cors.allow-origin="/https?:\/\/localhost(:[0-9]+)?/" \
             blacktop/elasticsearch:5.6
```

Start ReactJS App

```
> npm install
> npm start
```

=OR=

```bash
$ make start
```

![screenshot](https://github.com/blacktop/react-elasticsearch-poc/raw/master/screenshot.png)

## License

MIT Copyright (c) 2017 blacktop
