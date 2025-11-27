# 🕯️ WaxLab Buddy

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC.svg)](https://tailwindcss.com/)

> **Your Scientific Candle Companion**

A beautiful, user-friendly web application that calculates the perfect amounts of stearic acid, fragrance oil, and soy wax for your candle-making projects. Built with modern React and TypeScript for accuracy and reliability.

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

WaxLab Buddy is a specialized calculator designed for candle makers who need precise measurements for their candle recipes. Whether you're a beginner or an experienced candle maker, this tool helps you:

- **Calculate exact amounts** of stearic acid, fragrance oil, and soy wax based on your desired percentages
- **Support multiple units** - work with grams (g), kilograms (kg), ounces (oz), or pounds (lb)
- **Get instant results** - see all your recipe components calculated and formatted in your preferred unit
- **Follow best practices** - includes helpful tips for successful candle making

The application uses accurate conversion factors and percentage calculations to ensure your candles turn out perfectly every time.

---

## ✨ Features

### 🎨 UI/UX
- ✅ Modern, responsive design with Tailwind CSS 4
- ✅ Beautiful gradient backgrounds and smooth animations
- ✅ Mobile-first responsive layout
- ✅ Intuitive step-by-step wizard interface
- ✅ Visual progress indicator showing calculation steps
- ✅ Accessible with ARIA labels and keyboard navigation

### 🔧 Technical
- ✅ Built with React 19 + TypeScript
- ✅ Vite for lightning-fast build and hot module replacement
- ✅ shadcn/ui component library
- ✅ Type-safe calculations with unit conversion utilities
- ✅ Form validation with helpful error messages
- ✅ Centralized state management with custom hooks
- ✅ Reusable component architecture

### 🧮 Calculation Features
- ✅ Support for multiple weight units (g, kg, oz, lb)
- ✅ Accurate unit conversions
- ✅ Percentage-based calculations for stearic acid and fragrance oil
- ✅ Automatic final wax weight calculation
- ✅ Results displayed in user's preferred unit
- ✅ Professional recipe formatting

### ♿ Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Form validation with error announcements

---

## 🛠 Tech Stack

### Frontend
- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **State Management**: React Hooks with useReducer

### Tools & Libraries
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Notifications**: Sonner (toast notifications)
- **Fonts**: Google Fonts (Mountains of Christmas, Delius)

### Development
- **Linter**: ESLint 9 with TypeScript support
- **Package Manager**: npm
- **Type Checking**: TypeScript strict mode

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm installed
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd waxlab-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```
waxlab-buddy/
├── public/                 # Static assets
│   └── favicon.png        # Favicon
├── src/
│   ├── assets/            # Images and media
│   │   └── logo.png       # Application logo
│   ├── components/        # React components
│   │   ├── common/        # Reusable components
│   │   │   ├── ErrorMessage.tsx
│   │   │   ├── InfoCard.tsx
│   │   │   ├── PageHeader.tsx
│   │   │   ├── PageLayout.tsx
│   │   │   ├── ResultCard.tsx
│   │   │   └── index.ts
│   │   ├── ui/            # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── sonner.tsx
│   │   ├── FragranceOilPage.tsx
│   │   ├── NavLink.tsx
│   │   ├── ProgressIndicator.tsx
│   │   ├── ResultsPage.tsx
│   │   ├── StearicAcidPage.tsx
│   │   ├── UnitToggle.tsx
│   │   └── WelcomePage.tsx
│   ├── constants/         # Constants
│   │   └── index.ts       # Unit conversions and supported units
│   ├── hooks/             # Custom hooks
│   │   ├── useCandleForm.ts       # Form state management
│   │   └── useFormValidation.ts   # Form validation hook
│   ├── lib/               # Libraries
│   │   └── utils.ts       # Utility functions (cn helper)
│   ├── pages/             # Page components
│   │   └── Index.tsx      # Main page component
│   ├── types/             # TypeScript types
│   │   ├── index.ts       # Core types (WeightUnit, ValidationResult, etc.)
│   │   └── props.ts       # Component prop types
│   ├── utils/             # Utility functions
│   │   ├── calculations.ts    # Calculation logic (unit conversion, recipe calculation)
│   │   └── validation.ts      # Validation utilities
│   ├── App.tsx            # Root component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles with Tailwind
│   └── main.tsx           # Entry point
├── components.json        # shadcn/ui configuration
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

---

## 💻 Usage

### How to Use the Calculator

1. **Enter Wax Weight**
   - Enter the total weight of wax you want to use
   - Select your preferred unit (g, kg, oz, or lb)

2. **Set Stearic Acid Percentage**
   - Enter the percentage of stearic acid you want to add
   - Typically ranges from 0-30%

3. **Set Fragrance Oil Percentage**
   - Enter the percentage of fragrance oil
   - Recommended range: 6-10% for soy candles

4. **View Results**
   - See all calculated amounts in your preferred unit
   - View original weight, stearic acid, fragrance oil, and final wax weight
   - Get helpful tips for candle making

### Example Calculation

If you enter:
- **Weight**: 500g
- **Stearic Acid**: 10%
- **Fragrance Oil**: 8%

Results:
- **Original Wax Weight**: 500g
- **Stearic Acid**: 50g (10%)
- **Fragrance Oil**: 40g (8%)
- **Final Wax Weight**: 410g

---

## 🏗 Project Architecture

### State Management
- **useCandleForm Hook**: Manages form state with reducer pattern
- Centralized state for step navigation, weights, units, and percentages

### Validation
- **Validation Utilities**: Centralized validation logic for weights and percentages
- **Real-time Feedback**: Error messages shown after user interaction
- **Accessible Errors**: ARIA attributes for screen reader support

### Calculations
- **Unit Conversion**: Accurate conversions between g, kg, oz, and lb
- **Recipe Calculation**: Precise calculations done in grams for accuracy
- **Result Formatting**: Smart number formatting based on unit type

### Components
- **Reusable Components**: PageLayout, InfoCard, ResultCard, etc.
- **Type Safety**: Full TypeScript coverage with strict types
- **Accessibility First**: ARIA labels and semantic HTML throughout

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the dist folder to Netlify
```

### Environment Variables

No environment variables are required for this application. It's a client-only application with no backend dependencies.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style
- Run `npm run lint` before committing
- Write meaningful commit messages
- Use TypeScript strict mode
- Follow accessibility best practices

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**WaxLab Buddy**

- 🔗 Powered by: [Lumenessence](https://www.facebook.com/lumenessenceph) on Facebook
- 👩🏻‍💻 Developer: chrosales07@gmail.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Lucide](https://lucide.dev/) - Icon library
- [Lumenessence](https://www.facebook.com/lumenessenceph) - Inspiration and support

---

<div align="center">

**Made with ❤️ for Candle Makers**

*Calculate with confidence, create with precision*

</div>