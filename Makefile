.PHONY: start
start: stop
	@docker run -d --name elasticsearch -p 9200:9200 -e http.cors.enabled=true -e http.cors.allow-origin="/https?:\/\/localhost(:[0-9]+)?/" blacktop/elasticsearch:5.6
	@open -a Brave http://localhost:8080/webpack-dev-server/
	@npm run start

.PHONY: stop
stop:
	@docker rm -f elasticsearch || true
