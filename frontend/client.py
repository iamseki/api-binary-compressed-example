import gzip
import requests

filepath = 'airtravel.csv'

print(f'Reading bytes from {filepath}, compressing with GZIP and sending to express API')
with open(filepath, 'rb') as csv_file:
    data = csv_file.read() # read bytes from csv
    csv_file.close()
    compressed = gzip.compress(data)
    additional_headers = {}
    additional_headers['content-type'] = 'application/octet-stream'#'application/gzip'
    additional_headers['content-filename'] = 'airtravel.csv'

    r = requests.post('http://localhost:9000/upload/compress', data=compressed, headers=additional_headers)

    print(f'############ API Response Status Code: {r.status_code} ############')
    