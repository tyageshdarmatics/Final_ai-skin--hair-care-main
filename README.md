# AI Skin & Hair Care Platform

An advanced AI-powered application designed to holistically analyze skin and hair conditions using Google's powerful Gemini models. The platform seamlessly provides personalized AM/PM care routines, detects various conditions (like acne, wrinkles, dandruff, and hair thinning) using computer vision capabilities, and features integration logic for e-commerce (such as Shopify) to recommend relevant, targeted products.

## 🌟 Features

- **Advanced Skin Analysis**: Users can use their webcam to capture or upload an image of their face. The AI processes the image and identifies conditions such as acne, hyperpigmentation, dark circles, and wrinkles. It returns bounding-box data for visual representation and a confidence score for each identified condition.
- **Comprehensive Hair & Scalp Evaluation**: Through an interactive, customized questionnaire (for both male and female users) combined with image analysis, the platform securely evaluates hair loss stages, scalp conditions, stress impacts, and overall hair quality.
- **Personalized Care Routines**: Drawing upon the detailed analysis, the AI dynamically constructs personalized AM/PM skincare and haircare routines that fit seamlessly into the user's specific lifestyle and environmental factors.
- **Interactive Chat Assistant**: A context-aware chatbot capable of following up and answering personalized questions regarding their generated analyses, provided care routines, or general dermatological queries.
- **PDF Reports**: Users can seamlessly export their entire diagnosis, images, and prescribed routine as a clean, localized PDF for personal keeping or for sharing with a healthcare professional.
- **Product Integration Pipeline**: Built-in backend configuration for fetching detailed product recommendations from a Shopify store ecosystem based precisely on the AI's diagnosis.

## 💻 Tech Stack

- **Frontend**: React 19, TypeScript, Vite. Features intelligent UI state handling, integrated `CameraCapture` capabilities, and responsive designs.
- **Backend (API Layer)**: Node.js with Express.js. Designed to securely handle large model payloads, parse AI outputs, handle failover mechanisms, and communicate with external APIs (like Shopify).
- **Artificial Intelligence**: Google Gemini API (`gemini-2.5-flash` primarily used for multi-modal image and text generation). The backend includes a robust round-robin style API key pool failover mechanism.
- **Utilities**: `html2canvas` and `jsPDF` for client-side report generation.

## 📁 Project Structure

```text
├── App.tsx             # Main React application entry point (UI flows & Views)
├── index.css           # Global stylesheets
├── server.js           # Express backend server (AI routes, Shopify integration)
├── /components         # UI elements containing `CameraCapture`, conversational items, etc.
├── /services           # API services (`geminiService.ts`) for frontend-to-AI or backend comms.
├── /utils              # Helper functions (i.e., `pdfGenerator.ts`)
├── package.json        # Dependencies and scripts setup
└── vite.config.ts      # Vite configuration, environment variable mapping
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn` installed
- A [Google Gemini API Key](https://aistudio.google.com/)

### Setup Instructions

1. **Clone the repository and install dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Create a `.env` or `.env.local` file in the root directory and add the following keys:
   ```env
   # Setup your primary Gemini API Key
   VITE_API_KEY=gemini_api_key OR GEMINI_API_KEY=your_primary_gemini_api_key

   # (Optional) For the backend, you can specify multiple comma-separated keys 
   # to act as a failover pool if rate limits are hit:
   # GEMINI_API_KEY=key1,key2,key3
   
   # (Optional) Shopify configuration for smart product recommendations
   SHOPIFY_DOMAIN=your_store.myshopify.com
   SHOPIFY_ACCESS_TOKEN=your_shopify_storefront_or_admin_token

   # Specify the backend port
   PORT=3000
   ```

3. **Run the Application**
   The project has both a Vite frontend and a Node.js backend. 

   To start the frontend development server:
   ```bash
   npm run dev
   ```

   To start the Node.js backend server (in a separate terminal window):
   ```bash
   npm start
   # (or manually via: node server.js)
   ```

## ⚙️ Customization & Extensibility

- **Product Logic**: To customize the recommended product catalog manually (if not fully reliant on Shopify), you can modify the integrated `productData.ts` file. 
- **AI Models & Prompts**: Prompt templates and validation schemas can be tightly edited inside `server.js` (`POST /api/analyze-skin` and `/api/analyze-hair` routes) and within `/services/geminiService.ts` to adjust the rigorousness of the AI's deductions.

## 📄 License

This project is open-source. Please see the [LICENSE](./LICENSE) file for more information.
