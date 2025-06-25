#  ICL-Agent-Core: In-Context Learning Demonstration Recommender

##  项目简介

`ICL-Agent-Core` 是一个用于代码智能任务的 In-Context Learning (ICL) 样例推荐系统。该系统基于最新研究构建，用于自动选择最合适的 ICL 示例，并通过 API 接口向用户或 IDE 插件返回推荐结果，提升代码模型的性能与可控性。

本项目适用于如下任务：

- ✅ 代码补全（Code Completion）
- ✅ 缺陷检测（Bug Detection）
- ✅ 代码摘要（Code Summarization）

##  项目结构

[//]: # (#ICL-Agent-Core/)

[//]: # (#├── api/                    # 接口服务模块)

[//]: # (#│   ├── server.py)

[//]: # (#│   └── routes.py)

[//]: # (#├── core/                   # 推荐逻辑与策略模块)

[//]: # (#│   ├── retrieval.py        # 语义检索（如 UniXCoder）)

[//]: # (#│   ├── selector.py         # example 排序策略（KNN、Scoring）)

[//]: # (#│   └── config.py)

[//]: # (#├── data/                   # 示例样本库（按任务组织）)

[//]: # (#│   └── bug_detection/)

[//]: # (#│       └── examples.jsonl)

[//]: # (#├── examples/               # 调用示例)

[//]: # (#├── requirements.txt)

[//]: # (#└── README.md)
```bash
ICL-Web-Demo/
├── public/
│   ├── index.html          # 页面入口
│   └── examples.json       # 示例数据
├── src/
│   ├── App.jsx             # 核心逻辑：输入处理、匹配推荐
│   ├── main.jsx            # 启动入口
│   └── index.css           # 可自行添加样式
```

##  快速开始

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 启动 API 服务

```bash
python api/server.py
```

默认服务地址为：

```
http://localhost:8000/icl
```

##  API 使用说明

### POST `/icl`

- **请求参数（JSON）**：

```json
{
  "task": "bug_detection",
  "input": "static int crypto_close(...)",
  "top_k": 3
}
```

- **返回结果（JSON）**：

```json
{
  "examples": [
    {"input": "...", "output": "..."},
    {"input": "...", "output": "..."},
    ...
  ]
}
```

##  技术来源与引用

本项目的 ICL 示例选择策略基于以下研究工作：

- Gao et al. *What Makes Good In-Context Demonstrations for Code Intelligence Tasks?* (ASE 2023)
[//]: # (- [Anonymous]. *Poisoning In-Context Learning for Code Intelligence* &#40;ICSE 2026, DIPO&#41;)
- Zhao et al. *KNN-ICL: Compositional Parsing Generalization via Nearest Neighbor In-Context Learning* (arXiv:2312.10771)
- Lu et al. *Fantastically Ordered Prompts and Where to Find Them* (ACL 2022)
- Wei et al. *Larger Language Models Do In-Context Learning Differently* (arXiv:2303.03846)

##  TODO List

- [ ] 构建 IDE 插件，调用本 API 并嵌入代码开发场景
- [ ] 支持更多任务：Code2Code, Translation
- [ ] 增加排序策略：Embedding Clustering、Prompt Optimization


---

