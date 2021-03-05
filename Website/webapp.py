from flask import Flask, render_template, request, redirect
from data_service import create_account, login

app = Flask(__name__)


@app.route('/registrierung/')
def registrierung():
    in_mail = request.form['Hier kommen die Eingaben aus der Website rein']
    in_password = request.form['Hier kommen die Eingaben aus der Website rein']
    in_vorname = request.form['Hier kommen die Eingaben aus der Website rein']
    in_nachname = request.form['Hier kommen die Eingaben aus der Website rein']
    in_plz = request.form['Hier kommen die Eingaben aus der Website rein']
    in_city = request.form['Hier kommen die Eingaben aus der Website rein']
    in_street = request.form['Hier kommen die Eingaben aus der Website rein']
    in_haus_nr = request.form['Hier kommen die Eingaben aus der Website rein']


    try:
        create_account(
            'in_mail',
            'in_password',
            'in_vorname',
            'in_nachname',
            'in_plz',
            'in_city',
            'in_street',
            'in_haus_nr'
        )

        return redirect('/')

    except:
        return 'There was an issue adding your task'


@app.route('/login/')
def login():
    task_content_email = request.form['Hier kommt die Email aus der Website rein']
    task_content_passwort = request.form['Hier kommt das Passwort aus der Website rein']

    try:
        login(
            'in_mail'
            'in_password'
        )
        return redirect('/')
    except:

        return 'There was an issue adding your task'


if __name__ == "__main__":
    app.run(debug=True)
