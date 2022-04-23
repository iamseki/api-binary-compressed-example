run-backend:
	cd backend && npm run start

run-frontend:
	python3 frontend/client.py

install-backend-deps:
	cd backend && npm install && cd ..

install-frontend-deps:
	pip3 install -r frontend/requirements.txt