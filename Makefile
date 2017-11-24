ELASTIC?=5.6

.PHONY: start
start: stop
	@echo "===> Starting elasticsearch..."
	@docker run -d --name elasticsearch -p 9200:9200 -e http.cors.enabled=true -e http.cors.allow-origin="/https?:\/\/localhost(:[0-9]+)?/" blacktop/elasticsearch:$(ELASTIC);sleep 15
	@echo "===> Adding data to elasticsearch..."
	@cd scripts; ./add_data.sh
	@open -a Brave http://localhost:8080/webpack-dev-server/
	@npm run start

.PHONY: stop
stop:
	@echo "===> Stopping elasticsearch..."
	@docker rm -f elasticsearch || true
