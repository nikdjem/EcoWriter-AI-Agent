# 🌿 EcoWriter AI Agent

EcoWriter is a professional-grade AI content automation agent designed for the sustainability and industrial sectors. It specializes in generating high-quality, technically accurate, and SEO-optimized blog content focusing on **waste management**, **green energy**, and **sustainable cement production**.

Built with the **Gemini 3 Pro** engine, the agent utilizes deep-reasoning (Thinking Mode) to tackle complex industrial topics, ensuring your content is authoritative and engaging.

## ✨ Key Features

- **🧠 Deep Reasoning Engine**: Powered by `gemini-3-pro-preview` with a 32k thinking budget to handle complex technical queries about carbon capture, clinker production, and renewable grids.
- **📊 Performance Dashboard**: Track your organic reach, topic distribution, and content quality scores at a glance.
- **✍️ Advanced Content Engine**: 
  - **Topics**: Waste Management, Green Energy, Sustainable Cement.
  - **Lengths**: Short (400-600 words) to Long-form (2000+ words).
  - **Tones**: Technical, Professional, Educational, or Advocacy.
  - **Custom CTAs**: Integrated 'Learn More', 'Contact Us', or 'Download Report' actions.
- **🚀 SEO Optimized**: Every post includes auto-generated meta descriptions, reading time estimates, and semantic keywords.
- **⚙️ CMS Integration**: Configurable settings for WordPress, Ghost, and custom API connections.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **AI Model**: Google Gemini API (`gemini-3-pro-preview`)
- **Visuals**: Recharts (Analytics) & Playfair Display / Inter Typography

## 🚀 Getting Started

### Prerequisites

- A [Google AI Studio API Key](https://aistudio.google.com/app/apikey).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecowriter-ai.git
   cd ecowriter-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your Environment Variables:
   Create a `.env` file or set the variable in your environment:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## 📖 How to Use

1. **Configure the Agent**: Go to the **Agent Settings** tab to set your website URL, target audience, and CMS preferences.
2. **Generate Content**: In the **Draft Post** section, select your topic, desired length, and tone.
3. **Reasoning Phase**: Click "Generate Post". The AI will activate its reasoning engine (🧠 Thinking Mode) to synthesize the best possible article.
4. **Review & Schedule**: Read through the generated Markdown, check the SEO keywords, and click "Approve & Schedule" to send it to your CMS queue.

## 🛡️ License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*EcoWriter - Empowering sustainable industries with intelligent content.*
