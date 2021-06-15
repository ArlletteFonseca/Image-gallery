from flask import Flask, request

app = Flask(__name__)

UNSPLASH_URL="https://api.unsplash.com/photos/random"
UNSPLASH_KEY="5_Eti1RbWi0hpPAkTNi7mBgM1AAAhP1Xo676d31mnGk"

#endpoint
@app.route("/new-image")

def new_image():
  word = request.args.get("query")
  return {"word":word}

if __name__== "__main__":
  app.run(host="0.0.0.0", port=5050)
