from flask import Flask, request, jsonify
from flask_cors import CORS
import time
import json

app = Flask(__name__)
CORS(app)

@app.route('/methods', methods=['POST'])  # ✅ 明确支持 POST
def get_examples():
    data = request.get_json()  # ✅ 获取 JSON 中的 prompt
    prompt = data.get('prompt', '')

    # 模拟计算延迟
    time.sleep(1)

    # 简单示例：根据首字母决定返回哪个 example
    with open('examples.json', 'r') as f:
        examples = json.load(f)

    first_char = prompt.strip().lower()[:1]
    if 'a' <= first_char <= 'e':
        selected = examples[0]
    elif 'f' <= first_char <= 'm':
        selected = examples[1]
    else:
        selected = examples[2]

    return jsonify([selected])