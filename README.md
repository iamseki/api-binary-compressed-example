# Instructions

This repository is an example of how to send and retrieving binary data through an express API

## Runnning backend :scroll:

The backend nodejs server is listening by default at port 9000, we can run with:

    -   `make run-backend`

## Running frontend :scroll:

There is a python client that sends the airtravel.csv in root folder when we run:

    -   `make run-frontend`

## Tips :bookmark:

You may need to install dependencies, there's a Make command for both:

    -   `make install-backend-deps`
    -   `make install-frontend-deps` 

You might need to see the received binary data as well, to do so:

    -   `cd backend/tmp/gzip`
    -   `gzip -d PUT_FILENAME_HERE`


