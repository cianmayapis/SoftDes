from flask import Flask, render_template, jsonify

app = Flask(__name__, static_folder="static", static_url_path="")

# ---- Client side: serves the HTML document ----
@app.route("/")
def home():
    return render_template("index.html")


# ---- Authentication Module (with 2FA / TOTP) ----
@app.route("/api/register", methods=["POST"])
def register():
    return jsonify({"message": "TODO: save user in MongoDB"})

@app.route("/api/login", methods=["POST"])
def login():
    return jsonify({"message": "TODO: check email and password"})

@app.route("/api/verify-2fa", methods=["POST"])
def verify_2fa():
    return jsonify({"message": "TODO: check the 6-digit TOTP code"})

@app.route("/api/recover", methods=["POST"])
def recover():
    return jsonify({"message": "TODO: password recovery"})


# ---- Order Management Logic ----
@app.route("/api/menu")
def menu():
    return jsonify({"message": "TODO: read menu from MongoDB"})

@app.route("/api/order", methods=["POST"])
def order():
    return jsonify({"message": "TODO: save order in MongoDB"})


# ---- Payment Gateways (GCash, Maya, PayPal) ----
@app.route("/api/pay", methods=["POST"])
def pay():
    return jsonify({"message": "TODO: call payment gateway"})


if __name__ == "__main__":
    app.run(debug=True)