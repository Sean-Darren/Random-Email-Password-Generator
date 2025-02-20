from flask import Flask, jsonify
import random 
import string

app = Flask(__name__)

#Email Genetaror
def emailGenerator() :
    
    length = random.randint(8,16)
    
    EMAIL_DOMAINS = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
    "zoho.com",
    "mail.com",
    "yandex.com",
    "gmx.com",
    "hushmail.com",
    "fastmail.com",
    "tutanota.com",
    "inbox.com",
    "rediffmail.com",
    "runbox.com",
    "posteo.net",
    "startmail.com",
    "qq.com",
    ]
    
    nameEmail = ""
    
    emailDom = ""
    
    numberRandom = random.randint(0, len(EMAIL_DOMAINS) - 1)
    
    emailDom += EMAIL_DOMAINS[numberRandom]
    
    characters = string.ascii_letters
    characters += string.digits
    
    for i in range(length):
        nameEmail += random.choice(characters)
    
    return "{}@{}".format(nameEmail, emailDom)


#Password Generator
def passwordGenerator() :
    
    length = random.randint(6,14)
    
    characters = string.ascii_letters
    characters += string.digits
    characters += string.punctuation
    
    password = ""
    
    password = "".join(random.choice(characters) for _ in range(length))
    
    return password

#Convert from Python to JSON
@app.route('/generate-email', methods=['GET'])
def generate_email():
    return jsonify({'email': emailGenerator()})

@app.route('/generate-password', methods=['GET'])
def generate_password():
    return jsonify({'password': passwordGenerator()})

if __name__ == '__main__':
    app.run(debug=True, port=5000)