import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/methods')
def get_methods():
    return jsonify([
        { "id": 1, "content": "Example 1: Print Hello World" },
        { "id": 2, "content": "Example 2: Function to compute factorial" }
    ])

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # 从环境变量获取端口（Render使用）
    app.run(host='0.0.0.0', port=port, debug=True)