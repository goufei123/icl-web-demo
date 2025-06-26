import json
import os
import time
from random import random
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/methods')
def get_methods():
    examples = []
    file_path = "examples.json"
    time.sleep(5)
    with open(file_path, "r") as f:
        for line in f:
            try:
                example = json.loads(line.strip())
                examples.append(example)
            except json.JSONDecodeError:
                continue
    # For resource constraints,
    # we use random sampling to simulate model-based example selection
    selected = random.sample(examples, 5)
    result = []
    for idx, item in enumerate(selected, start=1):
        content = f"Example {idx}: {item['comment']}\n{item['ori_code']}"
        result.append({
            "id": idx,
            "content": content
        })
    return jsonify(result)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)