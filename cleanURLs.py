#!/usr/bin/env python
import sys
from urllib.parse import urlparse

with open( sys.argv[1]  ) as file:
    for line in file:


        parsed_uri = urlparse(line)
        print ('{uri.scheme}://{uri.netloc}/'.format(uri=parsed_uri))

        # a = line.rpartition('//')[-1]
        # print( a.split("/",1)[0])

        # t = line.split('//')[0]
        # t = t.substr(0, t.lastIndexOf("\\"));
        # print(t)
