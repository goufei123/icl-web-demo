from flask import Flask, jsonify
from flask_cors import CORS  # ✅ 导入 CORS

app = Flask(__name__)
CORS(app)  # ✅ 启用所有跨域访问（允许前端访问此接口）

@app.route('/methods')
def get_methods():
    return jsonify([
        { "id": 1, "content": "Example 1: Print Hello World" },
        { "id": 2, "content": "Example 2: Function to compute factorial" }
    ])

if __name__ == '__main__':
    app.run(debug=True)