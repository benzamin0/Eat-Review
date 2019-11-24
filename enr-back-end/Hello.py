from bottle import route, run, template
import sqlite3


con = sqlite3.connect('./db.db')

cur = con.cursor()
#cur.execute("CREATE TABLE USER(Name text, PhoneNum text);")
cur.execute("INSERT INTO USER Values('benzamin', '010-5136-6402')")
cur.execute('SELECT * FROM USER')
for row in cur:
    print(row)

cur.execute('COMMIT')

@route('/hello/<name>')
def index(name):
    return template('<b>Hello {{name}}</b>!', name=name)

run(host='localhost', port=8080)

