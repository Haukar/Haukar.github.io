from flask import Flask, render_template

app = Flask(__name__)

projects = [
    {
        "title":"Solana Webscraper",
        "language":"Gemaakt met: Python",
        "description":"Een modulaire, uitbreidbare market-intelligence scraper voor Solana (SOL) die prijsdata verzamelt en belangrijke analyses berekent. Ontworpen om eenvoudig uit te breiden met extra API’s, zoals DEX-data, on-chain metrics, nieuws en TVL, zonder de kernlogica opnieuw te hoeven schrijven.",
        "github":"https://github.com/Haukar/SolanaWebscraper"
    },
    {
        "title":"Portfolio Website",
        "language":"Gemaakt met: Python, Flask, HTML, CSS, JavaScript",
        "description":"Een moderne portfolio website gebouwd met Flask en HTML/CSS/JavaScript.",
        "github":"https://github.com/Haukar/Haukar.github.io",
        "link":"https://haukar.github.io/"
    }
]

@app.route("/")
def home():
    return render_template("index.html", projects=projects)

if __name__ == "__main__":
    app.run(debug=True)